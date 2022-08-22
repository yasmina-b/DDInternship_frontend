import { Subcategory } from './subcategory.component';

export class Product {
  id!: number;
  name!: string;
  description!: string;
  subcategoryId!: Subcategory[];
}
