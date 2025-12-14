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
