'use client';

import React, { useState } from 'react';
import { RentalItem, RentalTab } from '../types';
import { TabNavigation, RentalCard, EmptyState } from '../components';

interface MyRentalsScreenProps {
  rentals: RentalItem[];
}

export default function MyRentalsScreen({ rentals }: MyRentalsScreenProps) {
  const [activeTab, setActiveTab] = useState<RentalTab>('active');

  const filteredRentals = rentals.filter((rental) => rental.status === activeTab);

  const emptyStates: Record<RentalTab, { title: string; description: string }> = {
    upcoming: {
      title: 'No Upcoming Rentals',
      description: 'Your upcoming rentals will appear here before the rental period starts.',
    },
    active: {
      title: 'Nothing Here Yet!',
      description: 'Your active rentals will appear here once the rental period begins.',
    },
    past: {
      title: 'No Past Rentals',
      description: 'Your completed rentals will appear here.',
    },
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden" data-testid="my-rentals-screen">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button 
          className="text-[#333333] dark:text-[#fbfdfc] flex size-10 shrink-0 items-center justify-center"
          aria-label="Open menu"
          data-testid="menu-button"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
        <h1 className="text-[#333333] dark:text-[#fbfdfc] text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          My Rentals
        </h1>
        <div className="flex size-10 shrink-0 items-center justify-center"></div>
      </div>

      {/* Tabs */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Rental Items List */}
      <div className="flex flex-col px-4 pt-6 pb-24 gap-6">
        {filteredRentals.length === 0 ? (
          <EmptyState
            title={emptyStates[activeTab].title}
            description={emptyStates[activeTab].description}
            ctaText="Browse Items"
            ctaLink="/explore"
          />
        ) : (
          filteredRentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))
        )}
      </div>
    </div>
  );
}
