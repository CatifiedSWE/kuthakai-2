// Explore module types

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export interface Owner {
  id: string;
  name: string;
  avatar: string;
}

export interface ExploreItem {
  id: string;
  title: string;
  price: number;
  priceUnit: string; // e.g., 'day', 'hour', 'week'
  distance: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  owner: Owner;
  featured?: boolean;
}

export interface FeaturedItem {
  id: string;
  title: string;
  price: number;
  priceUnit: string;
  imageUrl: string;
  imageAlt: string;
}

export type ViewMode = 'grid' | 'map';
