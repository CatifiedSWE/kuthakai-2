export interface TrustFeature {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export const demoTrustFeatures: TrustFeature[] = [
  {
    id: '1',
    icon: 'verified_user',
    title: 'ID Verified Users',
    description: 'All users are verified with government ID',
  },
  {
    id: '2',
    icon: 'shield',
    title: 'Rental Insurance',
    description: 'Every rental is covered by insurance',
  },
  {
    id: '3',
    icon: 'lock',
    title: 'Secure Payments',
    description: 'Bank-level security for all transactions',
  },
  {
    id: '4',
    icon: 'support_agent',
    title: '24/7 Support',
    description: 'Round-the-clock customer support',
  },
];
