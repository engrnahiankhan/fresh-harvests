export interface Review {
  id: number;
  username: string;
  user_img: string;
  review_text: string;
}

export interface Reviews {
  review_count: number;
  reviewers: Review[];
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
  reviews: Reviews;
}

export type ProductsType = Product[];
