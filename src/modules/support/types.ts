// Support module types

export interface SupportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface EmergencySupport {
  title: string;
  description: string;
  phoneNumber: string;
}
