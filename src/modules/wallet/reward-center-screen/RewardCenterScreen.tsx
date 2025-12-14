'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { RewardCredit, ReferralInfo } from '../types';
import { CreditBalanceCard, ReferralCard, RedeemCard } from '../components';

interface RewardCenterScreenProps {
  credits: RewardCredit;
  referralInfo: ReferralInfo;
}

export default function RewardCenterScreen({ credits, referralInfo }: RewardCenterScreenProps) {
  const router = useRouter();

  const handleShareCode = () => {
    console.log('Share code clicked');
    // Handle share functionality
    if (navigator.share) {
      navigator.share({
        title: 'Join Kuthakai',
        text: `Use my referral code ${referralInfo.code} to get started!`,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(referralInfo.code);
      alert('Referral code copied to clipboard!');
    }
  };

  const handleRedeem = () => {
    console.log('Redeem clicked');
    // Navigate to redemption flow
    router.push('/explore');
  };

  const handleTransactionHistory = () => {
    router.push('/transactions');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark">
      <main className="flex flex-col gap-6 p-4">
        {/* Primary Stat Card */}
        <CreditBalanceCard credits={credits} />

        {/* Referral Bonuses Card */}
        <ReferralCard referralInfo={referralInfo} onShareCode={handleShareCode} />

        {/* Redeem Credits Card */}
        <RedeemCard onRedeem={handleRedeem} />

        {/* Transaction History Link */}
        <button
          onClick={handleTransactionHistory}
          className="flex items-center gap-4 rounded-lg bg-card-light dark:bg-card-dark px-4 py-4 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/70 transition-colors"
          data-testid="transaction-history-link"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-icon-bg-light dark:bg-icon-bg-dark">
            <span className="material-symbols-outlined text-2xl text-text-primary-light dark:text-text-primary-dark">
              history
            </span>
          </div>
          <p className="flex-1 truncate text-base font-normal leading-normal text-text-primary-light dark:text-text-primary-dark">
            Transaction History
          </p>
          <div className="shrink-0">
            <span className="material-symbols-outlined text-2xl text-text-secondary-light dark:text-text-secondary-dark">
              chevron_right
            </span>
          </div>
        </button>
      </main>
    </div>
  );
}
