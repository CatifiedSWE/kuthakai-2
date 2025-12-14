import React from 'react';
import { RewardCredit } from '../types';

interface CreditBalanceCardProps {
  credits: RewardCredit;
}

export default function CreditBalanceCard({ credits }: CreditBalanceCardProps) {
  return (
    <section className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-lg bg-card-light dark:bg-card-dark shadow-sm">
        <div className="flex w-full min-w-72 grow flex-col items-center justify-center gap-2 p-6">
          <p className="text-base font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">
            Available Credits
          </p>
          <p className="text-primary text-5xl font-bold leading-tight tracking-[-0.015em]">
            {credits.currency}{credits.amount.toFixed(2)}
          </p>
        </div>
      </div>
    </section>
  );
}
