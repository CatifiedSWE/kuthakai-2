// Onboarding module types

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  currentStep: number;
  totalSteps: number;
  ctaText: string;
  ctaLink: string;
}

export type OnboardingType = 'find-and-rent' | 'list-and-earn';
