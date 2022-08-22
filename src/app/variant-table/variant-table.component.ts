import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddVariantComponent } from '../add-variant/add-variant.component';
import { VariantService } from '../services/variant.service';

@Component({
  selector: 'app-variant-table',
  styleUrls: ['variant-table.component.css'],
  templateUrl: 'variant-table.component.html',
})
export class VariantTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = [
    'product',
    'price',
    'availableQuantity',
    'addedDate',
    'delete',
    'add',
  ];
  ELEMENT_DATA: any[] = [];
  dataSource!: MatTableDataSource<any>;
  variants: any;

  constructor(private variantService: VariantService, public dialog: Dialog) {}

  ngOnInit() {
    this.variantService.getVariant().subscribe((variantData) => {
      for (let index = 0; index < variantData.length; index++) {
        this.ELEMENT_DATA.push({
          id: variantData[index].id,
          product: variantData[index].productId.name,
          price: variantData[index].price,
          availableQuantity: variantData[index].availableQuantity,
          addedDate: variantData[index].addedDate,
        });
      }
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  getVariant() {
    this.variantService.getVariant().subscribe((response) => {
      this.dataSource.data = response;
    });
  }

  public deleteVariantById(id: number, index: number) {
    let resp = this.variantService.deleteVariant(id);
    resp.subscribe((data) => {
      this.variants = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getVariant();
    });
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    dialogConfig.autoFocus = true;
    this.dialog.open(AddVariantComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
