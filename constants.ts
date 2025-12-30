import { Product, Review } from './types';

// Helper to generate consistent reliable images from Unsplash
const getImg = (seed: string, w: number, h: number) => `https://images.unsplash.com/photo-${seed}?w=${w}&h=${h}&fit=crop&auto=format&q=75`;

export const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&h=1080&fit=crop&auto=format&q=80',
    title: "Wear Your Style.",
    subtitle: "Premium minimal aesthetic for the modern soul."
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=1080&fit=crop&auto=format&q=80',
    title: "The Oversized Edit.",
    subtitle: "Comfort meets bold street fashion."
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&h=1080&fit=crop&auto=format&q=80',
    title: "Sustainable Cotton.",
    subtitle: "Ethically sourced, beautifully crafted."
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Essential Oversized Tee',
    price: 45,
    category: 'Unisex',
    type: 'Oversized',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&auto=format&q=75', 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.8,
    reviews: 124,
    description: "Our signature heavyweight cotton tee with a boxy, oversized fit. Perfect for layering or wearing solo.",
    isBestSeller: true,
  },
  {
    id: 'p2',
    name: 'Minimalist Graphic Tee',
    price: 38,
    category: 'Men',
    type: 'Graphic',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.5,
    reviews: 89,
    description: "Soft washed cotton featuring abstract minimal art. A conversation starter.",
    isNew: true,
  },
  {
    id: 'p3',
    name: 'Urban Crop Top',
    price: 32,
    category: 'Women',
    type: 'Minimal',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.9,
    reviews: 210,
    description: "Cropped silhouette with raw hem details. 100% organic cotton.",
    isBestSeller: true,
  },
  {
    id: 'p4',
    name: 'Kids Playful Tee',
    price: 25,
    category: 'Kids',
    type: 'Graphic',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.7,
    reviews: 45,
    description: "Durable and soft for all-day play. Machine washable and fade resistant.",
  },
  {
    id: 'p5',
    name: 'Charcoal Vintage Wash',
    price: 50,
    category: 'Men',
    type: 'Basic',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.6,
    reviews: 150,
    description: "Vintage aesthetics with modern construction. The perfect charcoal grey.",
  },
  {
    id: 'p6',
    name: 'Beige Structure Tee',
    price: 42,
    category: 'Women',
    type: 'Oversized',
    image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.4,
    reviews: 67,
    description: "Structured shoulders and a premium drape. Elevate your basics.",
    isNew: true,
  },
  {
    id: 'p7',
    name: 'Midnight Black Heavy',
    price: 55,
    category: 'Unisex',
    type: 'Basic',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.9,
    reviews: 302,
    description: "The blackest black tee you will own. 300GSM heavy cotton.",
    isBestSeller: true,
  },
  {
    id: 'p8',
    name: 'Abstract Line Art',
    price: 39,
    category: 'Unisex',
    type: 'Graphic',
    image: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&h=1000&fit=crop&auto=format&q=75',
    gallery: ['https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&h=1000&fit=crop&auto=format&q=75'],
    rating: 4.3,
    reviews: 42,
    description: "Hand-drawn line art printed on soft cream cotton.",
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    user: 'Alex M.',
    rating: 5,
    comment: "The quality is unmatched. I've washed it 10 times and it fits the same.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&auto=format&q=75'
  },
  {
    id: 'r2',
    user: 'Sarah K.',
    rating: 5,
    comment: "Finally an oversized tee that actually fits well. Obsessed!",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format&q=75'
  },
  {
    id: 'r3',
    user: 'Jordan P.',
    rating: 4,
    comment: "Great material, shipping was super fast. Will buy again.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&auto=format&q=75'
  }
];

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
