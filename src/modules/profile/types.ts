// Profile module types

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  memberSince: string;
  isVerified: boolean;
}

export interface RentalItem {
  id: string;
  name: string;
  price: string;
  status: 'Listed' | 'Rented Out';
  imageUrl: string;
  imageAlt: string;
  category?: string;
}

export type TabType = 'listed' | 'rented';
