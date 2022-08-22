import { Component, Inject } from '@angular/core';
import { DIALOG_DATA } from '@angular/cdk/dialog';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductAttributeService } from '../services/product-attribute.service';
import { ProductAttribute } from '../models/product-attribute.component';
import { SubcategoryService } from '../services/subcategory.service';
import { AttributeValueService } from '../services/attribute-value.service';
import { Subcategory } from '../models/subcategory.component';
import { AttributeValue } from '../models/attribute-value.component';

@Component({
  selector: 'app-add-attribute',
  templateUrl: './add-attribute.component.html',
  styleUrls: ['./add-attribute.component.css'],
})
export class AddAttributeComponent {
  form!: FormGroup;
  attributeValues: any;
  subcategories: any;

  selectedAttribute!: any;
  selectedSubcategory!: any;

  attributes = new FormControl();
  subcategoriess = new FormControl();

  constructor(
    @Inject(DIALOG_DATA) public data: AttributeValue,
    @Inject(DIALOG_DATA) public data2: Subcategory,
    private fb: FormBuilder,
    private productAttributeService: ProductAttributeService,
    private subcategoryService: SubcategoryService,
    private attributeValueService: AttributeValueService
  ) {
    this.attributeValueService.getAttributeValues().subscribe((response) => {
      this.attributeValues = response;
    });
    this.subcategoryService.getSubcategories().subscribe((response) => {
      this.subcategories = response;
    });
  }

  createAttribute() {
    const attribute: ProductAttribute = new ProductAttribute();
    attribute.name = this.form.value.name;

    console.log(attribute);

    this.productAttributeService.createProductAttribute(attribute).subscribe({
      next: (response) => {
        console.log(response);
        console.log(attribute);
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
      attributes: [
        {
          attributesId: ['', [Validators.required]],
          attributesValue: ['', [Validators.required]],
        },
      ],
      subcategoriess: [
        {
          subcategoriessId: ['', [Validators.required]],
          subcategoriessName: ['', [Validators.required]],
        },
      ],
    });
  }
}
