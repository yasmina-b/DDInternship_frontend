import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subcategory } from '../models/subcategory.component';
import { CategoryService } from '../services/category.service';
import { Dialog } from '@angular/cdk/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { MatDialogConfig } from '@angular/material/dialog';

export interface CategoryData {
  id: string;
  subcategories: Subcategory[];
}

@Component({
  selector: 'app-category-table',
  styleUrls: ['category-table.component.css'],
  templateUrl: 'category-table.component.html',
})
export class CategoryTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  displayedColumns: string[] = ['name', 'subcategories', 'delete', 'add'];
  ELEMENT_DATA: any[] = [];
  dataSource!: MatTableDataSource<CategoryData>;
  categories: any;
  name: any;

  constructor(
    private categoryService: CategoryService,
    public dialog: Dialog
  ) {}

  ngOnInit() {
    this.categoryService.getCategories().subscribe((categoryData) => {
      for (let index = 0; index < categoryData.length; index++) {
        this.ELEMENT_DATA.push({
          id: categoryData[index].id,
          name: categoryData[index].name,
          subcategories: categoryData[index].subcategory,
        });
      }
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.ELEMENT_DATA);
    });
  }

  getCategory() {
    this.categoryService.getCategories().subscribe((response) => {
      this.dataSource.data = response;
    });
  }

  public deleteCategoryById(id: number, index: number) {
    let resp = this.categoryService.deleteCategory(id);
    resp.subscribe((data) => {
      this.categories = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.getCategory();
    });
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    this.dialog.open(AddCategoryComponent, dialogConfig);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
