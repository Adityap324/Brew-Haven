export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'desserts' | 'specialty';
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  notes: string;
  isPopular?: boolean;
  origin?: string;
  roastLevel?: 'Light' | 'Medium' | 'Dark' | 'Signature Roast';
  calories?: string;
}

export interface CartItem {
  cartId: string;
  item: MenuItem;
  quantity: number;
  selectedMilk?: string;
  selectedRoast?: string;
  selectedSweetness?: string;
  extraShots?: number;
  totalPrice: number;
}

export interface Reservation {
  id: string;
  referenceCode: string;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  seatingPreference: string;
  message?: string;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'coffee' | 'food' | 'ambience' | 'baristas';
  image: string;
  alt: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  photo: string;
  comment: string;
  rating: number;
  verified: boolean;
  favoriteItem: string;
}

export interface PillarItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}
