'use client';

import { TabType } from '../types';

interface TabBarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

interface Tab {
  id: TabType;
  label: string;
}

const tabs: Tab[] = [
  { id: 'listed', label: 'My Listed Items' },
  { id: 'rented', label: 'My Rented Items' },
];

export default function TabBar({ activeTab, onTabChange }: TabBarProps) {
  return (
    <div className="pb-3 md:pb-6 sticky top-[68px] z-10 bg-background-light dark:bg-background-dark">
      <div className="flex border-b border-[#e6dcdb] dark:border-gray-700 px-4 md:px-8 justify-between md:justify-start md:gap-8 md:max-w-7xl md:mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] md:pb-4 pt-4 md:pt-6 md:px-4 flex-1 md:flex-none transition-all duration-200 ${
              activeTab === tab.id
                ? 'border-b-primary text-primary'
                : 'border-b-transparent text-[#8a6560] dark:text-gray-400 hover:text-primary dark:hover:text-primary'
            }`}
          >
            <p className="text-sm md:text-base font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
