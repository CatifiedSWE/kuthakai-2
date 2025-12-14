'use client';

import { RentalInfo } from '../damage-claim-types';

interface DamageDetailsDisplayProps {
  rentalInfo: RentalInfo;
}

export default function DamageDetailsDisplay({ rentalInfo }: DamageDetailsDisplayProps) {
  return (
    <section className="mb-6">
      <h2 className="px-0 pb-2 pt-4 text-lg font-bold leading-tight tracking-tight text-zinc-800 dark:text-zinc-200">
        Item & Renter Details
      </h2>
      <div className="space-y-4">
        <div className="flex flex-col">
          <p className="pb-2 text-base font-medium leading-normal text-zinc-800 dark:text-zinc-200">
            Item Name
          </p>
          <div className="flex h-14 w-full items-center rounded-xl border border-zinc-200 bg-zinc-100/50 p-4 text-base text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            {rentalInfo.itemName}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="pb-2 text-base font-medium leading-normal text-zinc-800 dark:text-zinc-200">
            Renter's Name
          </p>
          <div className="flex h-14 w-full items-center rounded-xl border border-zinc-200 bg-zinc-100/50 p-4 text-base text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            {rentalInfo.renterName}
          </div>
        </div>
        <div className="flex flex-col">
          <p className="pb-2 text-base font-medium leading-normal text-zinc-800 dark:text-zinc-200">
            Rental Dates
          </p>
          <div className="flex h-14 w-full items-center rounded-xl border border-zinc-200 bg-zinc-100/50 p-4 text-base text-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            {rentalInfo.rentalDates}
          </div>
        </div>
      </div>
    </section>
  );
}
