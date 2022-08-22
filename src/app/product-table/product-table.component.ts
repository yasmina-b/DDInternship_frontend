import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddProductComponent } from '../add-product/add-product.component';
import { Subcategory } from '../models/subcategory.component';
import { ProductService } from '../services/product.service';

export interface ProductData {
  id: string;
  name: string;
  description: string;
  subcategory: Subcategory[];
}

@Component({
  selector: 'app-product-table',
  styleUrls: ['product-table.component.css'],
  templateUrl: 'product-table.component.html',
})
export class ProductTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = [
    'name',
    'description',
    'subcategory',
    'delete',
    'add',
  ];
  ELEMENT_DATA: any[] = [];
  dataSource!: MatTableDataSource<ProductData>;
  products: any;

  constructor(private productService: ProductService, public dialog: Dialog) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((productData) => {
      for (let index = 0; index < productData.length; index++) {
        this.ELEMENT_DATA.push({
          id: productData[index].id,
          name: productData[index].name,
          description: productData[index].description,
          subcategory: productData[index].subcategoryId.name,
        });
      }
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getProduct() {
    this.productService.getProducts().subscribe((response) => {
      this.dataSource.data = response;
    });
  }


  public deleteProductById(id: number, index: number) {
    let resp = this.productService.deleteProduct(id);
    resp.subscribe((data) => {
      this.products = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getProduct();
    });
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    dialogConfig.autoFocus = true;
    this.dialog.open(AddProductComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
