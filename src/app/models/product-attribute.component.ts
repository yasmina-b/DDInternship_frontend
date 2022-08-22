import { AttributeValue } from './attribute-value.component';
import { Subcategory } from './subcategory.component';

export class ProductAttribute {
  id!: number;
  name!: string;
  attributeValue!: AttributeValue[];
  subcategories!: Subcategory[];
}
