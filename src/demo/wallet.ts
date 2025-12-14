import { Transaction, WalletBalance, RewardCredit, ReferralInfo, TransactionFilter } from '@/modules/wallet/types';

export const demoWalletBalance: WalletBalance = {
  current: 12500.00,
  currency: '₹'
};

export const demoWalletTransactions: Transaction[] = [
  {
    id: '1',
    type: 'earning',
    title: 'Earnings from Drone Rental',
    description: '25 Aug 2024, 02:15 PM',
    amount: 2500.00,
    date: '25 Aug 2024',
    time: '02:15 PM'
  },
  {
    id: '2',
    type: 'payment',
    title: 'Payment for Camera Rental',
    description: '24 Aug 2024, 10:45 AM',
    amount: -1500.00,
    date: '24 Aug 2024',
    time: '10:45 AM'
  },
  {
    id: '3',
    type: 'earning',
    title: 'Earnings from Bicycle Rental',
    description: '22 Aug 2024, 06:30 PM',
    amount: 350.00,
    date: '22 Aug 2024',
    time: '06:30 PM'
  },
  {
    id: '4',
    type: 'payment',
    title: 'Payment for Tent Rental',
    description: '20 Aug 2024, 09:00 AM',
    amount: -800.00,
    date: '20 Aug 2024',
    time: '09:00 AM'
  },
  {
    id: '5',
    type: 'earning',
    title: 'Earnings from Speaker System',
    description: '18 Aug 2024, 11:20 AM',
    amount: 1200.00,
    date: '18 Aug 2024',
    time: '11:20 AM'
  }
];

export const demoTransactionFilters: TransactionFilter[] = [
  { id: '1', label: 'All', value: 'all' },
  { id: '2', label: 'Earnings', value: 'earnings' },
  { id: '3', label: 'Payments', value: 'payments' }
];

export const demoRewardCredits: RewardCredit = {
  amount: 25.00,
  currency: '$'
};

export const demoReferralInfo: ReferralInfo = {
  code: 'KUTHAKAI25',
  bonusAmount: 25,
  description: 'Invite friends and earn credits when they complete their first rental.'
};
