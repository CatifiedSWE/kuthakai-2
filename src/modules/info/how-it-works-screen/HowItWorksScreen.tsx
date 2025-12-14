"use client";

import { useState } from 'react';
import TimelineStep from '../components/TimelineStep';
import SegmentedControl from '../components/SegmentedControl';
import { HowItWorksStep } from '../types';

interface HowItWorksScreenProps {
  renterSteps: HowItWorksStep[];
  ownerSteps: HowItWorksStep[];
  onBack?: () => void;
  onStartAction?: (userType: string) => void;
}

export default function HowItWorksScreen({
  renterSteps,
  ownerSteps,
  onBack,
  onStartAction,
}: HowItWorksScreenProps) {
  const [userType, setUserType] = useState('For Renters');
  const steps = userType === 'For Renters' ? renterSteps : ownerSteps;
  const ctaText = userType === 'For Renters' ? 'Start Renting' : 'Start Listing';
  const headline = userType === 'For Renters' ? 'How to Rent on Kuthakai' : 'How to List on Kuthakai';

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8f6f5] dark:bg-[#221210] group/design-root overflow-x-hidden">
      {/* Top App Bar */}
      <div className="flex items-center bg-[#f8f6f5] dark:bg-[#221210] p-4 pb-2 justify-between sticky top-0 z-10">
        <button
          onClick={onBack}
          data-testid="how-it-works-back-button"
          className="flex size-12 shrink-0 items-center justify-center text-[#333333] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-[#333333] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          How It Works
        </h2>
        <div className="flex size-12 shrink-0 items-center justify-center"></div>
      </div>

      {/* Segmented Buttons */}
      <SegmentedControl
        options={['For Renters', 'For Owners']}
        defaultValue="For Renters"
        onChange={setUserType}
      />

      {/* Headline Text */}
      <h1 className="text-[#333333] dark:text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
        {headline}
      </h1>

      {/* Timeline */}
      <div className="grid grid-cols-[40px_1fr] gap-x-4 px-4 pb-4">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.id}
            stepNumber={index + 1}
            icon={step.icon}
            title={step.title}
            description={step.description}
            isFirst={index === 0}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex px-4 py-4 mt-auto bg-[#f8f6f5] dark:bg-[#221210] sticky bottom-0 border-t border-gray-200 dark:border-white/10">
        <button
          onClick={() => onStartAction?.(userType)}
          data-testid="how-it-works-cta-button"
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-5 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
        >
          <span className="truncate">{ctaText}</span>
        </button>
      </div>
    </div>
  );
}
