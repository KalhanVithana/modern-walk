interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string; 
  image: string;
  rating: Rating;
  color?:string
}
export type Category = "men's clothing" | "women's clothing";