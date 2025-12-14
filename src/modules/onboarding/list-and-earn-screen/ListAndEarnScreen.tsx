'use client';

import React from 'react';
import Link from 'next/link';
import { OnboardingLayout, PageIndicator } from '../components';
import { OnboardingStep } from '../types';

interface ListAndEarnScreenProps {
  data: OnboardingStep;
}

export default function ListAndEarnScreen({ data }: ListAndEarnScreenProps) {
  return (
    <OnboardingLayout>
      <div className="flex flex-col w-full h-full min-h-screen px-4">
        {/* Main Content Area */}
        <main className="flex flex-col items-center justify-center flex-1 w-full max-w-md mx-auto py-8">
          {/* Image/Illustration */}
          <div className="w-full grow flex items-center justify-center">
            <div className="w-full gap-1 overflow-hidden @[480px]:gap-2 flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-square rounded-none flex-1"
                style={{ backgroundImage: `url("${data.imageUrl}")` }}
                data-testid="onboarding-illustration"
                role="img"
                aria-label={data.imageAlt}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full pt-8">
            <h1 
              className="text-[#181211] dark:text-[#fbfdfc] tracking-tight text-[32px] font-bold leading-tight text-center"
              data-testid="onboarding-title"
            >
              {data.title}
            </h1>
            <p 
              className="text-[#181211]/80 dark:text-[#fbfdfc]/80 text-base font-normal leading-normal pt-2 text-center max-w-xs mx-auto"
              data-testid="onboarding-description"
            >
              {data.description}
            </p>
          </div>

          {/* Page Indicators */}
          <PageIndicator currentStep={data.currentStep} totalSteps={data.totalSteps} />
        </main>

        {/* Footer with CTAs */}
        <footer className="w-full max-w-md mx-auto pb-8 pt-4">
          {/* Primary Button */}
          <div className="flex">
            <Link
              href={data.ctaLink}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
              data-testid="get-started-button"
            >
              <span className="truncate">{data.ctaText}</span>
            </Link>
          </div>

          {/* Secondary Link */}
          <div className="flex pt-4">
            <Link
              href="/"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-transparent text-[#181211]/60 dark:text-[#fbfdfc]/60 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors"
              data-testid="skip-button"
            >
              <span className="truncate">Skip</span>
            </Link>
          </div>
        </footer>
      </div>
    </OnboardingLayout>
  );
}
