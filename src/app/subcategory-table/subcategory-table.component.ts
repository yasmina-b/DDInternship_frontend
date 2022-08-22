import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dialog } from '@angular/cdk/dialog';
import { SubcategoryService } from '../services/subcategory.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddSubcategoryComponent } from '../add-subcategory/add-subcategory.component';

@Component({
  selector: 'app-subcategory-table',
  styleUrls: ['subcategory-table.component.css'],
  templateUrl: 'subcategory-table.component.html',
})
export class SubcategoryTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['name', 'delete', 'add'];
  ELEMENT_DATA: any[] = [];
  dataSource!: MatTableDataSource<any>;
  subcategories: any;
  clicked: boolean = false;
  name: any;

  constructor(
    private subcategoryService: SubcategoryService,
    public dialog: Dialog
  ) {}

  ngOnInit() {
    this.subcategoryService.getSubcategories().subscribe((subcategoryData) => {
      for (let index = 0; index < subcategoryData.length; index++) {
        this.ELEMENT_DATA.push({
          id: subcategoryData[index].id,
          name: subcategoryData[index].name,
        });
      }
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.ELEMENT_DATA);
    });
  }

  getSubcategory() {
    this.subcategoryService.getSubcategories().subscribe((response) => {
      this.dataSource.data = response;
    });
  }


  public deleteSubcategoryById(id: number, index: number) {
    let resp = this.subcategoryService.deleteSubcategory(id);
    resp.subscribe((data) => {
      this.subcategories = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getSubcategory();
    });
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    dialogConfig.autoFocus = true;
    this.dialog.open(AddSubcategoryComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
