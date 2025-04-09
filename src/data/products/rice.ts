
import { Product } from '../types';

export const riceProducts: Product[] = [
  {
    id: "001",
    name: "Organic Basmati Rice",
    category: "Rice",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
    description: "Premium quality organic basmati rice. Long grain, aromatic and perfect for biryanis and pulao.",
    nutritionalInfo: {
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "008",
    name: "Brown Rice",
    category: "Rice",
    price: 125.29,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?q=80&w=2070&auto=format&fit=crop",
    description: "Nutritious brown rice with all bran layers intact for maximum health benefits.",
    nutritionalInfo: {
      calories: 111,
      protein: 2.6,
      carbs: 23.5,
      fat: 0.9,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "011",
    name: "Jasmine Rice",
    category: "Rice",
    price: 169.99,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=2070&auto=format&fit=crop",
    description: "Fragrant jasmine rice from Thailand, perfect for Asian dishes.",
    nutritionalInfo: {
      calories: 130,
      protein: 2.7,
      carbs: 28,
      fat: 0.3,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: false,
  },
];
