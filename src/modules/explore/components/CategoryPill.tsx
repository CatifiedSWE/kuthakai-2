'use client';

import { Category } from '../types';

interface CategoryPillProps {
  category: Category;
  isActive?: boolean;
  onClick?: (category: Category) => void;
}

export default function CategoryPill({ category, isActive = false, onClick }: CategoryPillProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(category);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${
        isActive
          ? 'bg-primary text-white'
          : 'bg-gray-100 dark:bg-surface-dark text-text-primary-light dark:text-text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
      data-testid={`category-pill-${category.id}`}
    >
      <p className="text-sm font-medium leading-normal">{category.name}</p>
    </button>
  );
}
