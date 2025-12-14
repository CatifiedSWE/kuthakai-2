'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ProhibitedItem } from '../types';
import { ProhibitedItemCard } from '../components';

interface ProhibitedItemsScreenProps {
  items: ProhibitedItem[];
}

export default function ProhibitedItemsScreen({ items }: ProhibitedItemsScreenProps) {
  const router = useRouter();

  const handleReportItem = () => {
    // Navigate to contact support or open report modal
    router.push('/contact-support');
  };

  return (
    <div 
      className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden"
      data-testid="prohibited-items-screen"
    >
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-3 backdrop-blur-sm">
        <button
          onClick={() => router.back()}
          className="flex size-10 shrink-0 items-center justify-center"
          aria-label="Go back"
          data-testid="back-button"
        >
          <span className="material-symbols-outlined text-[#212121] dark:text-[#f0f0f0]">
            arrow_back
          </span>
        </button>
        <h1 className="flex-1 text-center text-xl font-bold leading-tight tracking-tight text-[#212121] dark:text-[#f0f0f0]">
          Prohibited Items
        </h1>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <main className="flex-grow">
        {/* Introductory Text */}
        <div className="px-4 pt-6 pb-4">
          <p className="text-[#6b6b6b] dark:text-gray-400 text-base font-normal leading-relaxed">
            To maintain a safe and trusted community for everyone, the following items are prohibited 
            from being listed for rental on Kuthakai. This list is not exhaustive and we reserve the 
            right to remove any listing that we deem inappropriate or unsafe.
          </p>
        </div>

        {/* Prohibited Items List */}
        <div className="flex flex-col">
          {items.map((item) => (
            <ProhibitedItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Report Button */}
        <div className="px-4 py-8">
          <button
            onClick={handleReportItem}
            className="w-full h-12 px-6 bg-primary/10 dark:bg-primary/20 text-primary font-bold rounded-full flex items-center justify-center gap-2 hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
            data-testid="report-item-button"
          >
            <span className="material-symbols-outlined">flag</span>
            <span>Report an Item</span>
          </button>
        </div>
      </main>
    </div>
  );
}
