'use client';

import { SupportOption } from '../types';

interface SupportOptionCardProps {
  option: SupportOption;
  onClick?: () => void;
}

export default function SupportOptionCard({ option, onClick }: SupportOptionCardProps) {
  return (
    <button
      onClick={onClick}
      data-testid={`support-option-${option.id}`}
      className="flex items-center gap-4 bg-white dark:bg-gray-800/50 p-4 min-h-[72px] justify-between rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all w-full text-left active:scale-[0.98]"
    >
      <div className="flex items-center gap-4">
        <div className="text-gray-900 dark:text-white flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 shrink-0 size-12">
          <span className="material-symbols-outlined">{option.icon}</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-gray-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
            {option.title}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
            {option.description}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="text-gray-900 dark:text-gray-400 flex size-7 items-center justify-center">
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </button>
  );
}
