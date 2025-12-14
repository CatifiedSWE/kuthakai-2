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
