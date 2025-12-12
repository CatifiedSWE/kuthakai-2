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
    <div className="pb-3 sticky top-[68px] z-10 bg-background-light dark:bg-background-dark">
      <div className="flex border-b border-[#e6dcdb] dark:border-gray-700 px-4 justify-between">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 flex-1 transition-colors ${
              activeTab === tab.id
                ? 'border-b-primary text-primary'
                : 'border-b-transparent text-[#8a6560] dark:text-gray-400 hover:text-primary dark:hover:text-primary'
            }`}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
