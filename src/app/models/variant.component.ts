import { Product } from './product.component';

export class Variant {
  id!: number;
  price!: number;
  availableQuantity!: number;
  addedDate!: Date;
  productId!: Product[];
}
