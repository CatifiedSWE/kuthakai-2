"use client";

import { FAQCategory } from '../types';

export default function FAQCategoryCard({ category, onClick }: { category: FAQCategory; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      data-testid={`faq-category-${category.id}`}
      className="flex items-center gap-4 px-2 py-3 justify-between w-full hover:bg-gray-50 dark:hover:bg-white/5 rounded-lg transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
          <span className="material-symbols-outlined">{category.icon}</span>
        </div>
        <p className="text-base font-medium leading-normal flex-1 truncate text-left">{category.title}</p>
      </div>
      <div className="shrink-0">
        <div className="text-[#888888] dark:text-[#a09290] flex size-7 items-center justify-center">
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
      </div>
    </button>
  );
}
