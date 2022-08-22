import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dialog } from '@angular/cdk/dialog';
import { ProductAttributeService } from '../services/product-attribute.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddAttributeComponent } from '../add-attribute/add-attribute.component';
import { AddAttributeValueComponent } from '../add-attribute-value/add-attribute-value.component';

@Component({
  selector: 'app-product-attribute-table',
  templateUrl: './product-attribute-table.component.html',
  styleUrls: ['./product-attribute-table.component.css'],
})
export class ProductAttributeTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = [
    'attribute',
    'values',
    'subcategories',
    'delete',
    'add',
    'addAttribute',
  ];
  ELEMENT_DATA: any[] = [];
  dataSource!: MatTableDataSource<any>;
  attributes: any;

  constructor(
    private productAttributeService: ProductAttributeService,
    public dialog: Dialog
  ) {}

  ngOnInit() {
    this.productAttributeService
      .getProductAttributes()
      .subscribe((attributesData) => {
        for (let index = 0; index < attributesData.length; index++) {
          this.ELEMENT_DATA.push({
            id: attributesData[index].id,
            value: attributesData[index].name,
            attributeValue: attributesData[index].attributeValue,
            subcategories: attributesData[index].subcategories,
          });
        }
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('product attributes:', this.ELEMENT_DATA);
      });
  }

  getProductAttribute() {
    this.productAttributeService
      .getProductAttributes()
      .subscribe((response) => {
        this.dataSource.data = response;
      });
  }

  public deleteProductAttributeById(id: number, index: number) {
    let resp = this.productAttributeService.deleteProductAttributes(id);
    resp.subscribe((data) => {
      this.attributes = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getProductAttribute();
    });
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    this.dialog.open(AddAttributeComponent, dialogConfig);
  }

  public openDialog2(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    this.dialog.open(AddAttributeValueComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
