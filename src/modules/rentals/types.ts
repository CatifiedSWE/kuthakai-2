// Rentals module types

export type RentalStatus = 'upcoming' | 'active' | 'past';
export type RentalTab = 'upcoming' | 'active' | 'past';

export interface RentalItem {
  id: string;
  itemName: string;
  ownerName: string;
  imageUrl: string;
  imageAlt: string;
  startDate: string;
  endDate: string;
  status: RentalStatus;
  returnDeadline?: Date; // For active rentals
}

export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
