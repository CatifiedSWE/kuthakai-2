'use client';

import React from 'react';

interface ReviewsTabNavigationProps {
  activeTab: 'received' | 'given';
  onTabChange: (tab: 'received' | 'given') => void;
}

export default function ReviewsTabNavigation({
  activeTab,
  onTabChange,
}: ReviewsTabNavigationProps) {
  return (
    <div className="sticky top-[72px] bg-background-light dark:bg-background-dark z-10 pt-4" data-testid="reviews-tab-navigation">
      <div className="flex border-b border-border-light dark:border-border-dark px-4 gap-8">
        <button
          onClick={() => onTabChange('received')}
          className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${
            activeTab === 'received'
              ? 'border-b-primary text-text-primary-light dark:text-text-primary-dark'
              : 'border-b-transparent text-text-secondary-light dark:text-text-secondary-dark'
          }`}
          data-testid="tab-reviews-received"
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Reviews Received
          </p>
        </button>
        <button
          onClick={() => onTabChange('given')}
          className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 ${
            activeTab === 'given'
              ? 'border-b-primary text-text-primary-light dark:text-text-primary-dark'
              : 'border-b-transparent text-text-secondary-light dark:text-text-secondary-dark'
          }`}
          data-testid="tab-reviews-given"
        >
          <p className="text-sm font-bold leading-normal tracking-[0.015em]">
            Reviews Given
          </p>
        </button>
      </div>
    </div>
  );
}
