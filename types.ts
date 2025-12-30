export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Men' | 'Women' | 'Unisex' | 'Kids';
  type: 'Graphic' | 'Oversized' | 'Minimal' | 'Basic';
  image: string; // URL
  gallery: string[];
  rating: number;
  reviews: number;
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  cartId: string;
  selectedSize: string;
  quantity: number;
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  image?: string;
}

export type ViewState = 'HOME' | 'SHOP' | 'PRODUCT_DETAIL' | 'DESIGNER' | 'STORY' | 'CONTACT' | 'FAQ' | 'RETURNS' | 'LOOKBOOK';

export interface FilterState {
  category: string;
  type: string;
  sort: 'newest' | 'price-low' | 'price-high' | 'rating';
}