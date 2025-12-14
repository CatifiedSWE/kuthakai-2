'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Transaction, WalletBalance, TransactionFilter } from '../types';
import { BalanceCard, TransactionItem, FilterChips, EmptyState } from '../components';

interface WalletTransactionScreenProps {
  balance: WalletBalance;
  transactions: Transaction[];
  filters: TransactionFilter[];
}

export default function WalletTransactionScreen({ 
  balance, 
  transactions, 
  filters 
}: WalletTransactionScreenProps) {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredTransactions = useMemo(() => {
    if (activeFilter === 'all') return transactions;
    if (activeFilter === 'earnings') {
      return transactions.filter(t => t.type === 'earning');
    }
    if (activeFilter === 'payments') {
      return transactions.filter(t => t.type === 'payment');
    }
    return transactions;
  }, [transactions, activeFilter]);

  const handleWithdraw = () => {
    console.log('Withdraw clicked');
    // Handle withdraw logic
  };

  const handleBack = () => {
    router.back();
  };

  const handleHelp = () => {
    console.log('Help clicked');
    // Navigate to help center
    router.push('/faq-help-center');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button
          onClick={handleBack}
          className="text-zinc-900 dark:text-white flex size-12 shrink-0 items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
          aria-label="Go back"
          data-testid="back-button"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-zinc-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Wallet
        </h1>
        <div className="flex w-12 items-center justify-end">
          <button
            onClick={handleHelp}
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-zinc-900 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Help"
            data-testid="help-button"
          >
            <span className="material-symbols-outlined text-2xl">help_outline</span>
          </button>
        </div>
      </div>

      {/* Balance Card */}
      <BalanceCard balance={balance} onWithdraw={handleWithdraw} />

      {/* Section Header */}
      <h2 className="text-zinc-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Transaction History
      </h2>

      {/* Filter Chips */}
      <FilterChips 
        filters={filters} 
        activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} 
      />

      {/* Transaction List */}
      {filteredTransactions.length > 0 ? (
        <div className="flex flex-col">
          {filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
