import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VariantService } from '../services/variant.service';
import { ProductService } from '../services/product.service';
import { Variant } from '../models/variant.component';

@Component({
  selector: 'app-add-variant',
  templateUrl: './add-variant.component.html',
  styleUrls: ['./add-variant.component.css'],
})
export class AddVariantComponent {
  form!: FormGroup;
  products: any;
  selectedProduct: any;
  addedDate: any;

  constructor(
    @Inject(DIALOG_DATA) public data: Variant,
    private fb: FormBuilder,
    private variantService: VariantService,
    private productService: ProductService
  ) {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }

  createVariant() {
    const variant: Variant = new Variant();
    variant.price = this.form.value.price;
    variant.availableQuantity = this.form.value.availableQuantity;
    variant.addedDate = this.form.value.addedDate;

    this.variantService.createVariant(this.selectedProduct, variant).subscribe({
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
      price: ['', [Validators.required]],
      availableQuantity: ['', [Validators.required]],
      addedDate: ['', [Validators.required]],
    });
  }
}
