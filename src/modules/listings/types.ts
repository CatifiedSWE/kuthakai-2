// Listings module types

export interface RentalItem {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  category?: string;
}

export interface BookingDates {
  startDate: string;
  endDate: string;
  duration: string;
}

export interface PriceBreakdown {
  rentalFee: number;
  securityDeposit: number;
  serviceFee: number;
  total: number;
}

export interface BookingData {
  item: RentalItem;
  dates: BookingDates;
  pricing: PriceBreakdown;
}

export type PaymentMethod = 'upi' | 'card' | 'netbanking';

export interface PaymentOption {
  id: PaymentMethod;
  name: string;
  icon: string;
  imageUrl?: string;
}

// Item Details Types
export interface ItemOwner {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
}

export interface ItemReview {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ItemLocation {
  address: string;
  city: string;
  mapImage: string;
  mapAlt: string;
}

export interface ItemImage {
  id: string;
  url: string;
  alt: string;
}

export interface ItemDetails {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  images: ItemImage[];
  owner: ItemOwner;
  location: ItemLocation;
  reviews: ItemReview[];
  category?: string;
}

// My Listings Types
export type ListingStatus = 'available' | 'rented' | 'pending';

export interface MyListingItem {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
  status: ListingStatus;
}

// List Item Form Types
export interface ListItemFormData {
  photos: File[];
  title: string;
  category: string;
  description: string;
  pricePerDay: number;
}

export interface ListItemStep {
  currentStep: number;
  totalSteps: number;
}
