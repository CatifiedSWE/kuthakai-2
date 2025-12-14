'use client';

import React from 'react';
import Link from 'next/link';
import { OnboardingLayout, PageIndicator } from '../components';
import { OnboardingStep } from '../types';

interface FindAndRentScreenProps {
  data: OnboardingStep;
}

export default function FindAndRentScreen({ data }: FindAndRentScreenProps) {
  return (
    <OnboardingLayout>
      <main className="flex w-full flex-1 flex-col items-center justify-center p-4">
        <div className="flex w-full grow flex-col items-center justify-center">
          {/* Illustration */}
          <div className="w-full max-w-sm">
            <div className="w-full gap-1 overflow-hidden bg-transparent @[480px]:gap-2 aspect-square flex">
              <div
                className="w-full bg-center bg-no-repeat bg-contain aspect-auto rounded-none flex-1"
                style={{ backgroundImage: `url("${data.imageUrl}")` }}
                data-testid="onboarding-illustration"
                role="img"
                aria-label={data.imageAlt}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full max-w-sm px-4 pt-8">
            <h1 
              className="text-[#181211] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-3 pt-6"
              data-testid="onboarding-title"
            >
              {data.title}
            </h1>
            <p 
              className="text-[#333333] dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 text-center"
              data-testid="onboarding-description"
            >
              {data.description}
            </p>
          </div>
        </div>
      </main>

      {/* Footer with CTAs */}
      <footer className="w-full px-4 pb-8 pt-4">
        <div className="w-full max-w-sm mx-auto">
          <PageIndicator currentStep={data.currentStep} totalSteps={data.totalSteps} />
          
          <div className="flex py-3">
            <Link
              href={data.ctaLink}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 hover:opacity-90 transition-opacity"
              data-testid="continue-button"
            >
              <span className="truncate">{data.ctaText}</span>
            </Link>
          </div>

          <div className="flex items-center justify-center pt-2">
            <Link
              href="/"
              className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
              data-testid="skip-button"
            >
              Skip
            </Link>
          </div>
        </div>
      </footer>
    </OnboardingLayout>
  );
}
