import React from 'react';
import { ReferralInfo } from '../types';

interface ReferralCardProps {
  referralInfo: ReferralInfo;
  onShareCode?: () => void;
}

export default function ReferralCard({ referralInfo, onShareCode }: ReferralCardProps) {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark px-4 py-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
          <span className="material-symbols-outlined text-primary text-2xl">card_giftcard</span>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-base font-medium leading-normal text-text-primary-light dark:text-text-primary-dark">
            Referral Bonuses
          </p>
          <p className="mt-1 text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">
            {referralInfo.description}
          </p>
          <p className="mt-2 text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">
            Your referral code:{' '}
            <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
              {referralInfo.code}
            </span>
          </p>
        </div>
      </div>
      <button
        onClick={onShareCode}
        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-medium leading-normal hover:bg-primary/90 transition-colors"
        data-testid="share-code-button"
      >
        <span className="truncate">Share Code</span>
      </button>
    </section>
  );
}
