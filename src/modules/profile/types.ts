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

// KYC Verification Types
export type DocumentStatus = 'pending' | 'uploaded' | 'verified' | 'rejected';
export type VerificationStep = 'aadhaar' | 'pan' | 'selfie';

export interface KYCDocument {
  id: string;
  type: 'aadhaar-front' | 'aadhaar-back' | 'pan' | 'selfie';
  title: string;
  description: string;
  icon: string;
  status: DocumentStatus;
  uploadedImage?: string;
  uploadedAt?: string;
}

export interface KYCVerificationData {
  currentStep: number;
  totalSteps: number;
  stepName: string;
  documents: KYCDocument[];
  canSubmit: boolean;
}
