import React from 'react';
import { RentalTab } from '../types';

interface TabNavigationProps {
  activeTab: RentalTab;
  onTabChange: (tab: RentalTab) => void;
}

const tabs: { id: RentalTab; label: string }[] = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'active', label: 'Active' },
  { id: 'past', label: 'Past' },
];

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="sticky top-[72px] bg-background-light dark:bg-background-dark z-10">
      <div className="flex border-b border-[#e0e0e0] dark:border-[#444444] px-4 justify-between">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              data-testid={`tab-${tab.id}`}
              className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${
                isActive
                  ? 'border-b-primary text-primary'
                  : 'border-b-transparent text-[#8a6560] dark:text-[#e0e0e0]'
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
