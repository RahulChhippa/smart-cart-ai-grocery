
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

export interface Category {
  id: string;
  name: string;
  icon: string;
}
