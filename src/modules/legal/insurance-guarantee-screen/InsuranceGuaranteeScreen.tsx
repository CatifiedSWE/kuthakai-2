"use client";

import GuaranteeCard from '../components/GuaranteeCard';
import { GuaranteeOption } from '../types';

interface InsuranceGuaranteeScreenProps {
  options: GuaranteeOption[];
  onBack?: () => void;
  onToggle?: (optionId: string, enabled: boolean) => void;
  onLearnMore?: () => void;
  onTermsClick?: () => void;
}

export default function InsuranceGuaranteeScreen({
  options,
  onBack,
  onToggle,
  onLearnMore,
  onTermsClick,
}: InsuranceGuaranteeScreenProps) {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden text-slate-800 dark:text-slate-200">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <button
          onClick={onBack}
          data-testid="insurance-back-button"
          className="flex size-12 shrink-0 items-center justify-start text-slate-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-slate-900 dark:text-slate-50">
          Insurance & Guarantee
        </h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      {/* Main Content */}
      <main className="flex-grow px-4 pb-28">
        {/* Headline */}
        <h1 className="text-slate-900 dark:text-slate-50 tracking-light text-[32px] font-bold leading-tight text-left pt-6">
          Rent with Confidence
        </h1>

        {/* Body Text */}
        <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-6 pt-1">
          Your peace of mind is our priority. Learn about the protection plans we offer to ensure a secure rental experience for everyone.
        </p>

        {/* List Items Section */}
        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <GuaranteeCard
              key={option.id}
              option={option}
              onToggle={onToggle}
            />
          ))}
        </div>

        {/* Terms and Conditions Link */}
        <div className="pt-6 text-center">
          <button
            onClick={onTermsClick}
            data-testid="terms-link"
            className="text-primary text-sm font-medium hover:underline"
          >
            Read the full Terms and Conditions
          </button>
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div
        className="fixed bottom-0 left-0 w-full bg-background-light dark:bg-background-dark p-4 border-t border-slate-200 dark:border-slate-800"
      >
        <button
          onClick={onLearnMore}
          data-testid="learn-more-button"
          className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg text-base hover:bg-primary/90 transition-colors"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
