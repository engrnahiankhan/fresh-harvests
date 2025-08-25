export interface Review {
  id: number;
  username: string;
  user_img: string;
  review_text: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  images: string[];
  price: number;
  category: "fruits" | "vegetables" | "salad";
  rating: number;
  description: string;
  review_count: number;
  reviews: Review[];
}

export type ProductsType = Product[];
