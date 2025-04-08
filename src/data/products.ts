
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  inStock: boolean;
  isOrganic: boolean;
  isFeatured: boolean;
}

export const products: Product[] = [
  {
    id: "001",
    name: "Organic Bananas",
    category: "Fruits",
    price: 1.99,
    image: "/placeholder.svg",
    description: "Sweet, fresh organic bananas. Perfect for smoothies or a quick snack.",
    nutritionalInfo: {
      calories: 105,
      protein: 1.3,
      carbs: 27,
      fat: 0.3,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "002",
    name: "Free Range Eggs",
    category: "Dairy & Eggs",
    price: 4.99,
    image: "/placeholder.svg",
    description: "Farm fresh free-range eggs from ethically raised chickens.",
    nutritionalInfo: {
      calories: 70,
      protein: 6,
      carbs: 0,
      fat: 5,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "003",
    name: "Avocado",
    category: "Fruits",
    price: 2.49,
    image: "/placeholder.svg",
    description: "Ripe, creamy avocados perfect for toast, salads, or guacamole.",
    nutritionalInfo: {
      calories: 234,
      protein: 2.9,
      carbs: 12.5,
      fat: 21,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "004",
    name: "Whole Milk",
    category: "Dairy & Eggs",
    price: 3.49,
    image: "/placeholder.svg",
    description: "Farm fresh whole milk, pasteurized for safety.",
    nutritionalInfo: {
      calories: 149,
      protein: 8,
      carbs: 12,
      fat: 8,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "005",
    name: "Organic Spinach",
    category: "Vegetables",
    price: 3.99,
    image: "/placeholder.svg",
    description: "Fresh, organic spinach leaves. Rich in iron and vitamins.",
    nutritionalInfo: {
      calories: 23,
      protein: 2.9,
      carbs: 3.6,
      fat: 0.4,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "006",
    name: "Whole Wheat Bread",
    category: "Bakery",
    price: 3.49,
    image: "/placeholder.svg",
    description: "Freshly baked whole wheat bread, sliced for convenience.",
    nutritionalInfo: {
      calories: 69,
      protein: 3.6,
      carbs: 12,
      fat: 1,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "007",
    name: "Atlantic Salmon",
    category: "Seafood",
    price: 12.99,
    image: "/placeholder.svg",
    description: "Fresh Atlantic salmon fillets, rich in omega-3 fatty acids.",
    nutritionalInfo: {
      calories: 208,
      protein: 20,
      carbs: 0,
      fat: 13,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: true,
  },
  {
    id: "008",
    name: "Green Bell Pepper",
    category: "Vegetables",
    price: 1.29,
    image: "/placeholder.svg",
    description: "Crisp green bell peppers, perfect for salads or stir-fries.",
    nutritionalInfo: {
      calories: 20,
      protein: 1,
      carbs: 4.6,
      fat: 0.2,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
  {
    id: "009",
    name: "Organic Strawberries",
    category: "Fruits",
    price: 4.99,
    image: "/placeholder.svg",
    description: "Sweet, juicy organic strawberries, freshly picked.",
    nutritionalInfo: {
      calories: 32,
      protein: 0.7,
      carbs: 7.7,
      fat: 0.3,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: true,
  },
  {
    id: "010",
    name: "Chicken Breast",
    category: "Meat & Poultry",
    price: 8.99,
    image: "/placeholder.svg",
    description: "Boneless, skinless chicken breasts. Hormone and antibiotic-free.",
    nutritionalInfo: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: true,
  },
  {
    id: "011",
    name: "Organic Apples",
    category: "Fruits",
    price: 1.99,
    image: "/placeholder.svg",
    description: "Crisp, sweet organic apples. Perfect for a healthy snack.",
    nutritionalInfo: {
      calories: 95,
      protein: 0.5,
      carbs: 25,
      fat: 0.3,
    },
    inStock: true,
    isOrganic: true,
    isFeatured: false,
  },
  {
    id: "012",
    name: "Greek Yogurt",
    category: "Dairy & Eggs",
    price: 5.49,
    image: "/placeholder.svg",
    description: "Creamy Greek yogurt, high in protein and probiotics.",
    nutritionalInfo: {
      calories: 100,
      protein: 17,
      carbs: 6,
      fat: 0.4,
    },
    inStock: true,
    isOrganic: false,
    isFeatured: false,
  },
];

export const categories = [
  { id: "1", name: "All", icon: "ShoppingBasket" },
  { id: "2", name: "Fruits", icon: "Apple" },
  { id: "3", name: "Vegetables", icon: "Carrot" },
  { id: "4", name: "Dairy & Eggs", icon: "Milk" },
  { id: "5", name: "Bakery", icon: "Wheat" },
  { id: "6", name: "Meat & Poultry", icon: "Beef" },
  { id: "7", name: "Seafood", icon: "Fish" },
];

export const getRecommendedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "All") return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};
