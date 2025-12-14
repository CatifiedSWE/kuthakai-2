'use client';

import { useState } from 'react';
import { DamageClaimData, PhotoEvidence } from '../damage-claim-types';
import {
  DamageDetailsDisplay,
  DamageDescriptionInput,
  PhotoGallery,
} from '../components';

interface DamageClaimScreenProps {
  initialData: DamageClaimData;
  onBack?: () => void;
}

export default function DamageClaimScreen({
  initialData,
  onBack,
}: DamageClaimScreenProps) {
  const [description, setDescription] = useState(initialData.description);
  const [photos, setPhotos] = useState<PhotoEvidence[]>(initialData.photos);
  const [errors, setErrors] = useState<{ description?: string; photos?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: { description?: string; photos?: string } = {};

    if (!description.trim()) {
      newErrors.description = 'Please describe the damage';
    } else if (description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters';
    }

    if (photos.length === 0) {
      newErrors.photos = 'Please add at least one photo of the damage';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-white dark:bg-zinc-900">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-down" data-testid="success-toast">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-medium">Damage claim submitted successfully!</span>
          </div>
        </div>
      )}

      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-white/80 dark:bg-zinc-900/80 p-4 pb-2 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-700">
        <button
          onClick={onBack}
          data-testid="back-button"
          className="flex size-12 shrink-0 items-center justify-start text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined !text-3xl">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-zinc-800 dark:text-zinc-200">
          Damage Claim
        </h1>
        <div className="w-12 shrink-0"></div> {/* Spacer for centering title */}
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 py-2">
        {/* Item & Renter Details */}
        <DamageDetailsDisplay rentalInfo={initialData.rentalInfo} />

        {/* Describe the Damage */}
        <DamageDescriptionInput
          value={description}
          onChange={(value) => {
            setDescription(value);
            if (errors.description) {
              setErrors({ ...errors, description: undefined });
            }
          }}
          error={errors.description}
        />

        {/* Photographic Evidence */}
        <PhotoGallery
          photos={photos}
          onPhotosChange={(newPhotos) => {
            setPhotos(newPhotos);
            if (errors.photos) {
              setErrors({ ...errors, photos: undefined });
            }
          }}
          error={errors.photos}
        />
      </main>

      {/* Sticky Footer Button */}
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent p-4 dark:from-zinc-900">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          data-testid="submit-claim-button"
          className="h-14 w-full rounded-full bg-[#f86b59] text-lg font-bold text-white shadow-lg shadow-[#f86b59]/30 transition-transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Submitting...</span>
            </>
          ) : (
            'Submit Claim'
          )}
        </button>
      </footer>
    </div>
  );
}
