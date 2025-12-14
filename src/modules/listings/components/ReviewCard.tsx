'use client';

import { ItemReview } from '../types';

interface ReviewCardProps {
  review: ItemReview;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < review.rating);

  return (
    <div className="p-4 rounded-lg border border-border-light dark:border-border-dark" data-testid="review-card">
      <div className="flex items-center gap-3">
        <img
          className="size-10 rounded-full object-cover"
          src={review.userAvatar}
          alt={`Profile picture of ${review.userName}`}
          data-testid="review-user-avatar"
        />
        <div>
          <p className="font-bold" data-testid="review-user-name">{review.userName}</p>
          <div className="flex" data-testid="review-stars">
            {stars.map((filled, index) => (
              <span
                key={index}
                className="material-symbols-outlined !text-base text-star-gold"
                style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
              >
                star
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark" data-testid="review-comment">
        {review.comment}
      </p>
    </div>
  );
}
