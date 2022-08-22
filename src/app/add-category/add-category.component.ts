import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Category } from '../models/category.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  form!: FormGroup;

  constructor(
    @Inject(DIALOG_DATA) public data: Category,
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {}

  createCategory() {
    const category: Category = new Category();
    category.name = this.form.value.name;

    this.categoryService.createCategories(category).subscribe({
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
