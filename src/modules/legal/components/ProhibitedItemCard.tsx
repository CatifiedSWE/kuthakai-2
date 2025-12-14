'use client';

import React from 'react';
import { ProhibitedItem } from '../types';

interface ProhibitedItemCardProps {
  item: ProhibitedItem;
}

export default function ProhibitedItemCard({ item }: ProhibitedItemCardProps) {
  return (
    <div
      className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 min-h-[72px] py-3"
      data-testid={`prohibited-item-${item.id}`}
    >
      <div className="flex items-center gap-4 w-full">
        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 shrink-0 size-12">
          <span className="material-symbols-outlined text-2xl">{item.icon}</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#1a1a1a] dark:text-white text-base font-medium leading-normal">
            {item.title}
          </p>
          <p className="text-[#6b6b6b] dark:text-gray-400 text-sm font-normal leading-normal">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
