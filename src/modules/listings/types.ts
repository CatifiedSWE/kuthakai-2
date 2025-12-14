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
