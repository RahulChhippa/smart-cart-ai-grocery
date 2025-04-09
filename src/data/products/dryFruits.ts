
import { Product } from '../types';

export const dryFruitsProducts: Product[] = [
  {
    id: "018",
    name: "Organic Almonds",
    category: "Dry Fruits",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?q=80&w=2070&auto=format&fit=crop",
    description: "Premium California almonds, perfect for snacking, baking, or making homemade almond milk.",
    nutritionalInfo: {
      calories: 579,
      protein: 21.2,
      carbs: 21.7,
      fat: 49.9,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "019",
    name: "Cashew Nuts",
    category: "Dry Fruits",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1573851552177-9d3d78faaf61?q=80&w=2070&auto=format&fit=crop",
    description: "Crunchy, delicious cashews, perfect for snacking or adding to sweet and savory dishes.",
    nutritionalInfo: {
      calories: 553,
      protein: 18.2,
      carbs: 30.2,
      fat: 43.9,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: true,
  },
  {
    id: "020",
    name: "Medjool Dates",
    category: "Dry Fruits",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1570942872213-11508f5f391b?q=80&w=2070&auto=format&fit=crop",
    description: "Soft, sweet, and caramel-like dates known as the 'king of dates' for their exceptional quality.",
    nutritionalInfo: {
      calories: 277,
      protein: 1.8,
      carbs: 75,
      fat: 0.2,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: false,
  },
  {
    id: "021",
    name: "Dried Figs",
    category: "Dry Fruits",
    price: 329.99,
    image: "https://images.unsplash.com/photo-1606923128791-839554046673?q=80&w=2070&auto=format&fit=crop",
    description: "Naturally sweet dried figs rich in fiber and minerals, great for desserts or as a healthy snack.",
    nutritionalInfo: {
      calories: 249,
      protein: 3.3,
      carbs: 63.9,
      fat: 0.9,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "022",
    name: "Raisins",
    category: "Dry Fruits",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1508060793794-dcdc6f6a2cdc?q=80&w=2070&auto=format&fit=crop",
    description: "Naturally sweet sun-dried raisins, perfect for baking, cooking, or as a nutritious snack.",
    nutritionalInfo: {
      calories: 299,
      protein: 3.1,
      carbs: 79.2,
      fat: 0.5,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: false,
  },
];
