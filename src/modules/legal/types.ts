// Legal module types

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface GuaranteeOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  hasToggle?: boolean;
  defaultEnabled?: boolean;
}

// Privacy Policy Types
export interface PrivacyPolicySection {
  id: string;
  heading: string;
  subheading?: string;
  content: string;
  items?: string[];
}

export interface PrivacyPolicyContent {
  title: string;
  lastUpdated: string;
  introduction: string;
  sections: PrivacyPolicySection[];
  contact: {
    heading: string;
    text: string;
    email: string;
  };
}

// Prohibited Items Types
export interface ProhibitedItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Rental Agreement Types
export interface RentalSummary {
  itemName: string;
  itemImage: string;
  owner: string;
  renter: string;
  rentalPeriod: string;
  totalCost: string;
}

export interface RentalAgreementContent {
  summary: RentalSummary;
  agreementText: AgreementSection[];
}

export interface AgreementSection {
  id: string;
  title: string;
  content: string;
}

// Terms of Service Types
export interface TermsSection {
  id: string;
  heading: string;
  content: string;
  items?: string[];
}

export interface TermsOfServiceContent {
  title: string;
  lastUpdated?: string;
  sections: TermsSection[];
  contact?: {
    heading: string;
    text: string;
    email: string;
  };
}
