import React from 'react';

interface RedeemCardProps {
  onRedeem?: () => void;
}

export default function RedeemCard({ onRedeem }: RedeemCardProps) {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-card-light dark:bg-card-dark px-4 py-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20">
          <span className="material-symbols-outlined text-primary text-2xl">local_activity</span>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-base font-medium leading-normal text-text-primary-light dark:text-text-primary-dark">
            Redeem Credits
          </p>
          <p className="mt-1 text-sm font-normal leading-normal text-text-secondary-light dark:text-text-secondary-dark">
            Apply your credits at checkout for discounts on rentals.
          </p>
        </div>
      </div>
      <button
        onClick={onRedeem}
        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-medium leading-normal hover:bg-primary/90 transition-colors"
        data-testid="redeem-button"
      >
        <span className="truncate">Redeem Now</span>
      </button>
    </section>
  );
}
