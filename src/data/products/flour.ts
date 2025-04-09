
import { Product } from '../types';

export const flourProducts: Product[] = [
  {
    id: "004",
    name: "Whole Wheat Flour",
    category: "Flour",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1586444248836-27a6bf31617b?q=80&w=1964&auto=format&fit=crop",
    description: "100% whole wheat flour, stone-ground for better nutrition and taste.",
    nutritionalInfo: {
      calories: 340,
      protein: 13.2,
      carbs: 72,
      fat: 2.5,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "006",
    name: "Multi-Grain Flour",
    category: "Flour",
    price: 110.49,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
    description: "Nutritious blend of seven grains, perfect for rotis and breads.",
    nutritionalInfo: {
      calories: 340,
      protein: 14.6,
      carbs: 68,
      fat: 2.8,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "010",
    name: "Besan (Gram Flour)",
    category: "Flour",
    price: 95.99,
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2070&auto=format&fit=crop",
    description: "Fine gram flour made from ground chickpeas, perfect for pakoras and sweets.",
    nutritionalInfo: {
      calories: 387,
      protein: 22,
      carbs: 58,
      fat: 6.7,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: true,
  },
];
