import React from 'react';
import { RentalItem } from '../types';
import CountdownTimer from './CountdownTimer';

interface RentalCardProps {
  rental: RentalItem;
}

export default function RentalCard({ rental }: RentalCardProps) {
  return (
    <div 
      className="flex flex-col gap-4 rounded-lg bg-white dark:bg-[#332220] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
      data-testid="rental-card"
    >
      <div className="flex items-stretch justify-between gap-4">
        <div className="flex flex-col gap-1 flex-[2_2_0px]">
          <p className="text-[#8a6560] dark:text-[#e0e0e0] text-sm font-normal leading-normal" data-testid="rental-owner">
            Rented from {rental.ownerName}
          </p>
          <p className="text-[#333333] dark:text-[#fbfdfc] text-base font-bold leading-tight" data-testid="rental-item-name">
            {rental.itemName}
          </p>
          <p className="text-[#8a6560] dark:text-[#e0e0e0] text-sm font-normal leading-normal" data-testid="rental-dates">
            {rental.startDate} - {rental.endDate}
          </p>
        </div>
        <div
          className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg flex-1"
          style={{ backgroundImage: `url("${rental.imageUrl}")` }}
          data-testid="rental-image"
          role="img"
          aria-label={rental.imageAlt}
        />
      </div>
      {rental.returnDeadline && (
        <CountdownTimer deadline={rental.returnDeadline} />
      )}
    </div>
  );
}
