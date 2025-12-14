'use client';

import React, { useState } from 'react';
import RatingsSummary from '../components/RatingsSummary';
import ReviewCard from '../components/ReviewCard';
import ReviewsTabNavigation from '../components/ReviewsTabNavigation';
import { RatingSummary, Review } from '@/demo/reviews';

interface ReviewsScreenProps {
  ratingSummary: RatingSummary;
  reviewsReceived: Review[];
  reviewsGiven: Review[];
}

export default function ReviewsScreen({
  ratingSummary,
  reviewsReceived,
  reviewsGiven,
}: ReviewsScreenProps) {
  const [activeTab, setActiveTab] = useState<'received' | 'given'>('received');

  const currentReviews = activeTab === 'received' ? reviewsReceived : reviewsGiven;

  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark"
      data-testid="reviews-screen"
    >
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10 border-b border-border-light dark:border-border-dark">
        <div className="text-text-primary-light dark:text-text-primary-dark flex size-12 shrink-0 items-center justify-start -ml-2">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: '28px', fontVariationSettings: "'FILL' 0, 'wght' 500" }}
          >
            arrow_back
          </span>
        </div>
        <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Reviews & Ratings
        </h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      {/* Headline Text */}
      <h1 className="text-text-primary-light dark:text-text-primary-dark tracking-light text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">
        Your Overall Rating
      </h1>

      {/* Rating Summary */}
      <RatingsSummary summary={ratingSummary} />

      {/* Tabs */}
      <ReviewsTabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Reviews List */}
      <div className="flex flex-col gap-8 bg-background-light dark:bg-background-dark p-4">
        {currentReviews.length > 0 ? (
          currentReviews.map((review, index) => (
            <React.Fragment key={review.id}>
              <ReviewCard review={review} />
              {index < currentReviews.length - 1 && (
                <div className="w-full h-px bg-border-light dark:bg-border-dark"></div>
              )}
            </React.Fragment>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <span className="material-symbols-outlined text-6xl text-text-secondary-light dark:text-text-secondary-dark/50 mb-4">
              rate_review
            </span>
            <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
              No Reviews Yet
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mt-2 max-w-xs">
              {activeTab === 'received'
                ? "You haven't received any reviews yet."
                : "You haven't given any reviews yet."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
