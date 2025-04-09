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

export const categories = [
  { id: "1", name: "All", icon: "ShoppingBasket" },
  { id: "2", name: "Rice", icon: "Wheat" },
  { id: "3", name: "Pulses", icon: "Leaf" },
  { id: "4", name: "Flour", icon: "Wheat" },
  { id: "5", name: "Oils", icon: "Droplet" },
  { id: "6", name: "Spices", icon: "Flame" },
  { id: "7", name: "Dry Fruits", icon: "Apple" },
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
