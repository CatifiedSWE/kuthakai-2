import React from 'react';
import { TransactionFilter } from '../types';

interface FilterChipsProps {
  filters: TransactionFilter[];
  activeFilter: string;
  onFilterChange: (filterId: string) => void;
}

export default function FilterChips({ filters, activeFilter, onFilterChange }: FilterChipsProps) {
  return (
    <div className="flex gap-3 px-4 pb-4 overflow-x-auto">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <div
            key={filter.id}
            onClick={() => onFilterChange(filter.value)}
            className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full pl-4 pr-4 cursor-pointer transition-colors ${
              isActive
                ? 'bg-primary'
                : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700'
            }`}
            data-testid={`filter-chip-${filter.value}`}
          >
            <p
              className={`text-sm font-medium leading-normal ${
                isActive
                  ? 'text-white'
                  : 'text-zinc-900 dark:text-zinc-300'
              }`}
            >
              {filter.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
