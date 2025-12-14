'use client';

import { PriceBreakdown } from '../types';

interface PriceDetailsSectionProps {
  pricing: PriceBreakdown;
}

function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export default function PriceDetailsSection({ pricing }: PriceDetailsSectionProps) {
  return (
    <div>
      <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-5">
        Price Details
      </h3>
      <div className="px-4">
        <div className="flex justify-between gap-x-6 py-2.5">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
            Rental Fee
          </p>
          <p className="text-gray-900 dark:text-white text-sm font-normal leading-normal text-right">
            {formatCurrency(pricing.rentalFee)}
          </p>
        </div>
        <div className="flex justify-between gap-x-6 py-2.5">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
            Security Deposit
          </p>
          <p className="text-gray-900 dark:text-white text-sm font-normal leading-normal text-right">
            {formatCurrency(pricing.securityDeposit)}
          </p>
        </div>
        <div className="flex justify-between gap-x-6 py-2.5">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
            Service Fee
          </p>
          <p className="text-gray-900 dark:text-white text-sm font-normal leading-normal text-right">
            {formatCurrency(pricing.serviceFee)}
          </p>
        </div>
        <div className="my-3 h-px bg-gray-200 dark:bg-gray-700"></div>
        <div className="flex justify-between gap-x-6 py-2">
          <p className="text-gray-900 dark:text-white text-base font-bold leading-normal">
            Total Amount
          </p>
          <p className="text-gray-900 dark:text-white text-base font-bold leading-normal text-right">
            {formatCurrency(pricing.total)}
          </p>
        </div>
      </div>
    </div>
  );
}
