import React from 'react';
import { ReturnItem } from '@/demo/requests';

interface RentalItemCardProps {
  item: ReturnItem;
}

export default function RentalItemCard({ item }: RentalItemCardProps) {
  return (
    <div className="flex items-center gap-4 py-4 min-h-[72px]" data-testid="rental-item-card">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
        style={{ backgroundImage: `url("${item.itemImage}")` }}
        role="img"
        aria-label={item.itemName}
      ></div>
      <div className="flex flex-col justify-center">
        <p className="text-neutral-900 dark:text-neutral-100 text-base font-medium leading-normal line-clamp-1">
          {item.itemName}
        </p>
        <p className="text-neutral-400 dark:text-neutral-200/70 text-sm font-normal leading-normal line-clamp-2">
          Rented: {item.rentalPeriod}
        </p>
      </div>
    </div>
  );
}
