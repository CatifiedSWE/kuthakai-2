'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PrivacyPolicyContent } from '../types';

interface PrivacyPolicyScreenProps {
  content: PrivacyPolicyContent;
}

export default function PrivacyPolicyScreen({ content }: PrivacyPolicyScreenProps) {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col" data-testid="privacy-policy-screen">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-3 backdrop-blur-sm">
        <button
          onClick={() => router.back()}
          className="flex size-10 shrink-0 items-center justify-center"
          aria-label="Go back"
          data-testid="back-button"
        >
          <span className="material-symbols-outlined text-[#212121] dark:text-[#f0f0f0]">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-xl font-bold leading-tight tracking-tight text-[#212121] dark:text-[#f0f0f0]">
          {content.title}
        </h1>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 pb-8 pt-2">
        {/* Last Updated */}
        <p 
          className="pb-6 pt-2 text-sm font-normal leading-normal text-[#616161] dark:text-[#a0a0a0]"
          data-testid="last-updated"
        >
          Last updated: {content.lastUpdated}
        </p>

        {/* Introduction */}
        <p className="pb-6 text-base font-normal leading-relaxed">
          {content.introduction}
        </p>

        {/* Sections */}
        {content.sections.map((section, index) => (
          <div key={section.id} className="pb-4" data-testid={`section-${section.id}`}>
            <h2 className="pb-3 pt-4 text-lg font-bold leading-tight tracking-tight text-[#212121] dark:text-[#f0f0f0]">
              {section.heading}
            </h2>
            
            {section.subheading && (
              <h3 className="pb-2 pt-2 text-base font-bold text-[#212121] dark:text-[#f0f0f0]">
                {section.subheading}
              </h3>
            )}
            
            <p className={`text-base leading-relaxed ${section.items && section.items.length > 0 ? 'pb-4' : ''}`}>
              {section.content}
            </p>
            
            {section.items && section.items.length > 0 && (
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Contact Section */}
        <div data-testid="contact-section">
          <h2 className="pb-3 pt-4 text-lg font-bold leading-tight tracking-tight text-[#212121] dark:text-[#f0f0f0]">
            {content.contact.heading}
          </h2>
          <p className="text-base leading-relaxed">
            {content.contact.text}{' '}
            <a 
              className="font-semibold text-[#0057FF] dark:text-[#6ab0ff] underline"
              href={`mailto:${content.contact.email}`}
              data-testid="contact-email"
            >
              {content.contact.email}
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
