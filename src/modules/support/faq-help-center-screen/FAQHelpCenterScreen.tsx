"use client";

import { FAQCategory } from '../types';
import FAQCategoryCard from '../components/FAQCategoryCard';
import SearchBar from '../components/SearchBar';

interface FAQHelpCenterScreenProps {
  categories: FAQCategory[];
  onBack?: () => void;
  onCategoryClick?: (categoryId: string) => void;
  onContactSupport?: () => void;
}

export default function FAQHelpCenterScreen({
  categories,
  onBack,
  onCategoryClick,
  onContactSupport,
}: FAQHelpCenterScreenProps) {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden text-[#333333] dark:text-[#f8f6f5]">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between">
        <button
          onClick={onBack}
          data-testid="faq-back-button"
          className="text-[#333333] dark:text-[#f8f6f5] flex size-12 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center">
          FAQ & Help Center
        </h1>
        <div className="size-12 shrink-0"></div> {/* Spacer for centering title */}
      </div>

      {/* Search Bar */}
      <SearchBar placeholder="How can we help?" />

      <div className="h-4"></div>

      {/* FAQ Categories */}
      <div className="flex flex-col px-2">
        {categories.map((category) => (
          <FAQCategoryCard
            key={category.id}
            category={category}
            onClick={() => onCategoryClick?.(category.id)}
          />
        ))}
      </div>

      <div className="flex-grow"></div>

      {/* Contact Us Section */}
      <div className="px-4 py-8 text-center">
        <p className="text-base text-[#888888] dark:text-[#a09290] mb-4">Still need help?</p>
        <button
          onClick={onContactSupport}
          data-testid="contact-support-button"
          className="w-full max-w-sm mx-auto h-12 rounded-lg border border-primary text-primary font-bold text-base hover:bg-primary/10 transition-colors"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
}
