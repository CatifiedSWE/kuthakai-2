'use client';

import React from 'react';
import { RentalSummaryData } from '../types';

interface RentalSummaryProps {
  summary: RentalSummaryData;
}

export default function RentalSummary({ summary }: RentalSummaryProps) {
  return (
    <div data-testid="rental-summary">
      {/* Item Display */}
      <div className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 pt-4 pb-2">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shadow-sm"
          style={{ backgroundImage: `url("${summary.itemImage}")` }}
          data-testid="item-image"
        />
        <p className="text-text-light dark:text-text-dark text-base font-semibold leading-normal flex-1">
          {summary.itemName}
        </p>
      </div>

      {/* Section Header */}
      <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">
        Summary of Your Rental
      </h2>

      {/* Details List */}
      <div className="px-4 pb-4">
        <div className="space-y-1 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
              Owner
            </p>
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal text-right">
              {summary.owner}
            </p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
              Renter
            </p>
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal text-right">
              {summary.renter}
            </p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
              Rental Period
            </p>
            <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal text-right">
              {summary.rentalPeriod}
            </p>
          </div>
          <div className="flex justify-between gap-x-6 py-2">
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
              Total Cost
            </p>
            <p className="text-text-light dark:text-text-dark text-sm font-bold leading-normal text-right">
              {summary.totalCost}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
