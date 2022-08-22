import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttributeValueService } from '../services/attribute-value.service';
import { ProductAttributeService } from '../services/product-attribute.service';
import { AttributeValue } from '../models/attribute-value.component';

@Component({
  selector: 'app-add-attribute-value',
  templateUrl: './add-attribute-value.component.html',
  styleUrls: ['./add-attribute-value.component.css'],
})
export class AddAttributeValueComponent {
  form!: FormGroup;
  productAttributes: any;
  selectedAttribute: any;

  constructor(
    @Inject(DIALOG_DATA) public data: AttributeValue,
    private fb: FormBuilder,
    private attributeValueService: AttributeValueService,
    private productAttributeService: ProductAttributeService
  ) {
    this.productAttributeService
      .getProductAttributes()
      .subscribe((response) => {
        this.productAttributes = response;
      });
  }

  createAttributeValue() {
    const attributeValue: AttributeValue = new AttributeValue();
    attributeValue.value = this.form.value.value;

    this.attributeValueService
      .createAttributeValue(this.selectedAttribute, attributeValue)
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
      value: ['', [Validators.required]],
    });
  }
}
