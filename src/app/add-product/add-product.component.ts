import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubcategoryService } from '../services/subcategory.service';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  form!: FormGroup;
  subcategories: any;
  selectedSubcategory: any;

  constructor(
    @Inject(DIALOG_DATA) public data: Product,
    private fb: FormBuilder,
    private productService: ProductService,
    private subcategoryService: SubcategoryService
  ) {
    this.subcategoryService.getSubcategories().subscribe((response) => {
      this.subcategories = response;
    });
  }

  createProduct() {
    const product: Product = new Product();
    product.name = this.form.value.name;
    product.description = this.form.value.description;

    this.productService
      .createProducts(this.selectedSubcategory, product)
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
      description: ['', [Validators.required]],
    });
  }
}
