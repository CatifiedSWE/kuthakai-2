'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { TermsOfServiceContent } from '../types';

interface TermsOfServiceScreenProps {
  content: TermsOfServiceContent;
}

export default function TermsOfServiceScreen({ content }: TermsOfServiceScreenProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-primary-text-light dark:text-primary-text-dark">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={handleBack}
          aria-label="Go back"
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-primary-text-light dark:text-primary-text-dark hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          data-testid="back-button"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-primary-text-light dark:text-primary-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Terms of Service
        </h2>
        <div className="size-10 shrink-0"></div> {/* Spacer for centering title */}
      </div>

      {/* Scrollable Content Area */}
      <main className="flex-grow px-4 pt-6 pb-12">
        {content.sections.map((section) => (
          <div key={section.id} className="mb-6">
            <h1 className="text-primary-text-light dark:text-primary-text-dark tracking-tight text-2xl font-bold leading-tight text-left pb-3">
              {section.heading}
            </h1>
            <div 
              className="text-primary-text-light dark:text-primary-text-dark text-base font-normal leading-relaxed pb-6"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
            {section.items && section.items.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 pb-6 text-primary-text-light dark:text-primary-text-dark text-base font-normal leading-relaxed">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact Section */}
        {content.contact && (
          <div className="mb-6">
            <h1 className="text-primary-text-light dark:text-primary-text-dark tracking-tight text-2xl font-bold leading-tight text-left pb-3">
              {content.contact.heading}
            </h1>
            <p className="text-primary-text-light dark:text-primary-text-dark text-base font-normal leading-relaxed pb-6">
              {content.contact.text}{' '}
              <a className="text-primary font-medium underline" href={`mailto:${content.contact.email}`}>
                {content.contact.email}
              </a>.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
