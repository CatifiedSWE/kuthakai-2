'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RentalAgreementContent } from '../types';
import { RentalSummary, SignatureCanvas } from '../components';

interface RentalAgreementScreenProps {
  agreement: RentalAgreementContent;
}

export default function RentalAgreementScreen({ agreement }: RentalAgreementScreenProps) {
  const router = useRouter();
  const [isAgreed, setIsAgreed] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);

  const handleConfirm = () => {
    if (!isAgreed || !hasSignature) {
      alert('Please sign the agreement and check the confirmation box.');
      return;
    }
    // Process the agreement confirmation
    alert('Agreement confirmed! Redirecting...');
    router.push('/my-rentals');
  };

  return (
    <div 
      className="relative flex min-h-screen w-full flex-col overflow-x-hidden"
      data-testid="rental-agreement-screen"
    >
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-3 backdrop-blur-sm">
        <button
          onClick={() => router.back()}
          className="flex size-10 shrink-0 items-center justify-center"
          aria-label="Go back"
          data-testid="back-button"
        >
          <span className="material-symbols-outlined text-[#212121] dark:text-[#f0f0f0]">
            arrow_back
          </span>
        </button>
        <h1 className="flex-1 text-center text-xl font-bold leading-tight tracking-tight text-[#212121] dark:text-[#f0f0f0]">
          Rental Agreement
        </h1>
        <div className="w-10"></div> {/* Spacer */}
      </div>

      <main className="flex-1 pb-24">
        {/* Rental Summary */}
        <RentalSummary summary={agreement.summary} />

        {/* Agreement Text Section */}
        <div className="px-4 py-2">
          <div 
            className="h-60 overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark space-y-4"
            data-testid="agreement-text"
          >
            {agreement.agreementText.map((section) => (
              <p key={section.id}>
                <strong>{section.title}:</strong> {section.content}
              </p>
            ))}
          </div>
        </div>

        {/* Signature Section */}
        <SignatureCanvas onSignatureChange={(isEmpty) => setHasSignature(!isEmpty)} />

        {/* Confirmation Checkbox */}
        <div className="px-4 pb-4">
          <div className="flex items-start gap-3">
            <input
              className="mt-1 h-5 w-5 rounded-md border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark text-primary focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark cursor-pointer"
              id="agreement-checkbox"
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
              data-testid="agreement-checkbox"
            />
            <label
              className="text-sm text-text-secondary-light dark:text-text-secondary-dark cursor-pointer"
              htmlFor="agreement-checkbox"
            >
              By signing, I confirm I have read and agree to the Kuthakai Rental Agreement.
            </label>
          </div>
        </div>
      </main>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-700 p-4">
        <button
          onClick={handleConfirm}
          disabled={!isAgreed || !hasSignature}
          className="w-full h-12 px-6 bg-primary text-white font-bold rounded-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-all"
          data-testid="confirm-agreement-button"
        >
          <span>Confirm Agreement</span>
        </button>
      </div>
    </div>
  );
}
