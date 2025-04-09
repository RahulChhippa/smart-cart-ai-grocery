
import { Product } from './types';
import { products } from './productsData';

/**
 * Get products that are featured
 */
export const getRecommendedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

/**
 * Get products by category, or all products if category is "All"
 */
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};

/**
 * Get a product by its ID
 */
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
