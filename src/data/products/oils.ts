
import { Product } from '../types';

export const oilsProducts: Product[] = [
  {
    id: "003",
    name: "Cold Pressed Mustard Oil",
    category: "Oils",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2036&auto=format&fit=crop",
    description: "Pure cold-pressed mustard oil, rich in flavor and perfect for Indian cooking.",
    nutritionalInfo: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "007",
    name: "Extra Virgin Olive Oil",
    category: "Oils",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1519692933481-e8rr4d5b2098?q=80&w=2070&auto=format&fit=crop",
    description: "Premium extra virgin olive oil from Greece, perfect for salads and Mediterranean dishes.",
    nutritionalInfo: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: true,
  },
  {
    id: "012",
    name: "Groundnut Oil",
    category: "Oils",
    price: 175.49,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=2036&auto=format&fit=crop",
    description: "Pure groundnut oil with high smoking point, ideal for deep frying.",
    nutritionalInfo: {
      calories: 884,
      protein: 0,
      carbs: 0,
      fat: 100,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
];
