// Damage claim specific types

export interface RentalInfo {
  itemName: string;
  renterName: string;
  rentalDates: string;
}

export interface PhotoEvidence {
  id: string;
  url: string;
  alt: string;
}

export interface DamageClaimData {
  rentalInfo: RentalInfo;
  description: string;
  photos: PhotoEvidence[];
}

export interface DamageClaimFormData {
  description: string;
  photos: PhotoEvidence[];
}
