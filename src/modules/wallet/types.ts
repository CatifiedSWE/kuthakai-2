// Wallet module types

export type TransactionType = 'earning' | 'payment';

export interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  description: string;
  amount: number;
  date: string;
  time: string;
}

export interface WalletBalance {
  current: number;
  currency: string;
}

export interface RewardCredit {
  amount: number;
  currency: string;
}

export interface ReferralInfo {
  code: string;
  bonusAmount: number;
  description: string;
}

export interface TransactionFilter {
  id: string;
  label: string;
  value: 'all' | 'earnings' | 'payments';
}
