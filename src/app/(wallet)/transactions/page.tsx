import { WalletTransactionScreen } from '@/modules/wallet';
import { demoWalletBalance, demoWalletTransactions, demoTransactionFilters } from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wallet & Transactions - Kuthakai',
  description: 'View your wallet balance and transaction history on Kuthakai',
};

export default function TransactionsPage() {
  return (
    <WalletTransactionScreen 
      balance={demoWalletBalance}
      transactions={demoWalletTransactions}
      filters={demoTransactionFilters}
    />
  );
}
