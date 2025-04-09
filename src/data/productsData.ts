
import { Product } from './types';
import { riceProducts } from './products/rice';
import { pulsesProducts } from './products/pulses';
import { flourProducts } from './products/flour';
import { oilsProducts } from './products/oils';
import { spicesProducts } from './products/spices';
import { dryFruitsProducts } from './products/dryFruits';

// Combine all product categories into a single array
export const products: Product[] = [
  ...riceProducts,
  ...pulsesProducts,
  ...flourProducts,
  ...oilsProducts,
  ...spicesProducts,
  ...dryFruitsProducts
];
