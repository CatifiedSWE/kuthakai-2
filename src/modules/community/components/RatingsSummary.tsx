import React from 'react';
import { RatingSummary } from '@/demo/reviews';

interface RatingsSummaryProps {
  summary: RatingSummary;
}

export default function RatingsSummary({ summary }: RatingsSummaryProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span
          key={`star-${i}`}
          className="material-symbols-outlined text-primary"
          style={{ fontSize: '18px' }}
        >
          star
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span
          key="star-half"
          className="material-symbols-outlined text-primary"
          style={{ fontSize: '18px' }}
        >
          star_half
        </span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span
          key={`star-empty-${i}`}
          className="material-symbols-outlined text-neutral-300 dark:text-neutral-600"
          style={{ fontSize: '18px' }}
        >
          star
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-6 p-4" data-testid="ratings-summary">
      <div className="flex flex-col gap-2">
        <p className="text-text-primary-light dark:text-text-primary-dark text-4xl font-black leading-tight tracking-[-0.033em]">
          {summary.overallRating.toFixed(1)}
        </p>
        <div className="flex gap-0.5">{renderStars(summary.overallRating)}</div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
          based on {summary.totalReviews} reviews
        </p>
      </div>
      <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-x-2 gap-y-3">
        {summary.ratingBreakdown.map((breakdown) => (
          <React.Fragment key={breakdown.stars}>
            <p className="text-text-primary-light dark:text-text-primary-dark text-sm font-normal leading-normal">
              {breakdown.stars}
            </p>
            <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-border-light dark:bg-border-dark/50">
              <div
                className="rounded-full bg-primary"
                style={{ width: `${breakdown.percentage}%` }}
              ></div>
            </div>
            <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal text-right">
              {breakdown.percentage}%
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
