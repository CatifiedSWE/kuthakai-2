'use client';

import React, { useState } from 'react';
import RentalItemCard from '../components/RentalItemCard';
import PhotoUpload from '../components/PhotoUpload';
import StarRating from '../components/StarRating';
import { ReturnItem } from '@/demo/requests';

interface ReturnFeedbackScreenProps {
  item: ReturnItem;
}

export default function ReturnFeedbackScreen({ item }: ReturnFeedbackScreenProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);

  const handleSubmit = () => {
    console.log('Submitting return feedback:', { rating, review, photos });
    // Handle submission logic here
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark"
      data-testid="return-feedback-screen"
    >
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-border-light dark:border-border-dark">
        <div className="text-text-primary-light dark:text-text-primary-dark flex size-12 shrink-0 items-center justify-start -ml-2">
          <span
            className="material-symbols-outlined cursor-pointer"
            style={{ fontSize: '28px', fontVariationSettings: "'FILL' 0, 'wght' 500" }}
          >
            arrow_back
          </span>
        </div>
        <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Return & Feedback
        </h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      <main className="flex-grow pb-28 px-4">
        {/* List Item */}
        <RentalItemCard item={item} />

        {/* Section Header */}
        <h2 className="text-neutral-900 dark:text-neutral-100 text-lg font-bold leading-tight tracking-[-0.015em] pt-4 pb-2">
          Confirm Item Condition
        </h2>

        {/* Body Text */}
        <p className="text-neutral-900/80 dark:text-neutral-100/80 text-base font-normal leading-normal pb-3 pt-1">
          Please upload a few photos of the returned item.
        </p>

        {/* Photo Upload */}
        <PhotoUpload onPhotosChange={setPhotos} />

        {/* Section Header for Feedback */}
        <h2 className="text-neutral-900 dark:text-neutral-100 text-lg font-bold leading-tight tracking-[-0.015em] pt-8 pb-2">
          How was your experience?
        </h2>

        {/* Body Text for Feedback */}
        <p className="text-neutral-900/80 dark:text-neutral-100/80 text-base font-normal leading-normal pb-3 pt-1">
          Rate your experience with the owner and the item.
        </p>

        {/* Star Rating Component */}
        <StarRating initialRating={4} onRatingChange={setRating} />

        {/* Text Area for Review */}
        <div className="mt-4">
          <textarea
            className="w-full rounded-lg border-2 border-neutral-200 dark:border-neutral-900/50 bg-background-light dark:bg-background-dark p-4 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400/80 focus:border-primary focus:ring-primary focus:outline-none"
            placeholder="Share your experience..."
            rows={5}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            data-testid="review-textarea"
          />
        </div>
      </main>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-border-light dark:border-border-dark p-4">
        <button
          onClick={handleSubmit}
          className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-md shadow-primary/30 hover:bg-primary/90 transition-colors"
          data-testid="submit-feedback-button"
        >
          <span className="truncate">Submit Return & Feedback</span>
        </button>
      </div>
    </div>
  );
}
