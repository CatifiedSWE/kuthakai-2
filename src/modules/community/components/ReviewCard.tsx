import React from 'react';
import { Review } from '@/demo/reviews';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span
            key={i}
            className="material-symbols-outlined text-primary"
            style={{ fontSize: '20px' }}
          >
            star
          </span>
        );
      } else {
        stars.push(
          <span
            key={i}
            className="material-symbols-outlined text-text-secondary-light/50 dark:text-text-secondary-dark/50"
            style={{ fontSize: '20px', fontVariationSettings: "'FILL' 0" }}
          >
            star
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col gap-4 bg-background-light dark:bg-background-dark" data-testid="review-card">
      <div className="flex items-center gap-3">
        <img
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          alt={`Profile picture of ${review.reviewerName}`}
          src={review.reviewerAvatar}
        />
        <div className="flex-1">
          <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
            {review.reviewerName}
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
            {review.date}
          </p>
        </div>
      </div>
      <div className="flex gap-0.5">{renderStars(review.rating)}</div>
      <p className="text-text-primary-light dark:text-text-primary-dark text-base font-normal leading-normal">
        {review.comment}
      </p>
    </div>
  );
}
