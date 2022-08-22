import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubcategoryService } from '../services/subcategory.service';
import { Subcategory } from '../models/subcategory.component';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css'],
})
export class AddSubcategoryComponent {
  form!: FormGroup;
  categories: any;
  selectedCategory: any;

  constructor(
    @Inject(DIALOG_DATA) public data: Subcategory,
    private fb: FormBuilder,
    private subcategoryService: SubcategoryService,
    private categoryService: CategoryService
  ) {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    });
  }

  createSubcategory() {
    const subcategory: Subcategory = new Subcategory();
    subcategory.name = this.form.value.name;

    this.subcategoryService
      .createSubcategory(this.selectedCategory, subcategory)
      .subscribe({
        next: (response) => {
          console.log(response);
          window.location.reload();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
}
