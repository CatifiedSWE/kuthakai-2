'use client';

import { RentalItem, BookingDates } from '../types';

interface RentalSummaryCardProps {
  item: RentalItem;
  dates: BookingDates;
}

export default function RentalSummaryCard({ item, dates }: RentalSummaryCardProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-200 dark:border-gray-700 p-4 transition-all hover:shadow-md">
      <div className="flex flex-col gap-1 flex-[2_2_0px]">
        <p className="text-gray-900 dark:text-white text-base font-bold leading-tight">
          {item.name}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">
          {dates.duration}: {dates.startDate} - {dates.endDate}
        </p>
      </div>
      <div
        className="aspect-square w-24 bg-center bg-no-repeat bg-cover rounded-lg flex-shrink-0"
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
        role="img"
        aria-label={item.imageAlt}
      />
    </div>
  );
}
