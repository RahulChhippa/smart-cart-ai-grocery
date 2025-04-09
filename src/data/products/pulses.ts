
import { Product } from '../types';

export const pulsesProducts: Product[] = [
  {
    id: "002",
    name: "Toor Dal (Yellow Split Pigeon Peas)",
    category: "Pulses",
    price: 120.99,
    image: "https://images.unsplash.com/photo-1515543904450-b184e4f57a93?q=80&w=2070&auto=format&fit=crop",
    description: "High-quality yellow split pigeon peas, perfect for dal preparations and Indian curries.",
    nutritionalInfo: {
      calories: 116,
      protein: 7.2,
      carbs: 20,
      fat: 0.4,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "005",
    name: "Organic Green Moong Dal",
    category: "Pulses",
    price: 130.99,
    image: "https://images.unsplash.com/photo-1612257999756-9ce15e0eb360?q=80&w=1964&auto=format&fit=crop",
    description: "Organic green moong dal, rich in protein and essential minerals.",
    nutritionalInfo: {
      calories: 347,
      protein: 24.5,
      carbs: 63.4,
      fat: 1.2,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "009",
    name: "Organic Chickpeas",
    category: "Pulses",
    price: 140.99,
    image: "https://images.unsplash.com/photo-1515543904450-b184e4f57a93?q=80&w=2070&auto=format&fit=crop",
    description: "Organic chickpeas (Chana), perfect for curries, hummus, and salads.",
    nutritionalInfo: {
      calories: 364,
      protein: 19,
      carbs: 61,
      fat: 6,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
];
