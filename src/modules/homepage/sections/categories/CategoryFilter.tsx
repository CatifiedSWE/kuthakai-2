'use client';

import { useState } from 'react';
import { demoCategories } from '@/demo';

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="px-4 lg:px-6 pt-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {demoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 shadow-sm transition-all ${
                activeCategory === category.id
                  ? 'bg-[#f86b59] text-white'
                  : 'bg-white dark:bg-[#221210]/80 text-[#181211] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
              }`}
            >
              <p className="text-sm font-medium leading-normal whitespace-nowrap">
                {category.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
