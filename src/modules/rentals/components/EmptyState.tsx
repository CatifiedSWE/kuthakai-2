import React from 'react';
import Link from 'next/link';

interface EmptyStateProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function EmptyState({ title, description, ctaText, ctaLink }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6" data-testid="empty-state">
      <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
        <span className="material-symbols-outlined text-primary text-5xl">inventory_2</span>
      </div>
      <h3 className="text-lg font-bold text-[#333333] dark:text-[#fbfdfc] mb-2">{title}</h3>
      <p className="text-[#8a6560] dark:text-[#e0e0e0] max-w-xs">{description}</p>
      {ctaText && ctaLink && (
        <Link
          href={ctaLink}
          className="mt-8 rounded-full bg-primary px-8 py-3 text-white font-bold text-base hover:opacity-90 transition-opacity"
          data-testid="empty-state-cta"
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
}
