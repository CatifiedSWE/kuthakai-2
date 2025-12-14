'use client';

import { ItemReview } from '../types';
import ReviewCard from './ReviewCard';

interface ReviewsListProps {
  reviews: ItemReview[];
  onSeeAll?: () => void;
}

export default function ReviewsList({ reviews, onSeeAll }: ReviewsListProps) {
  if (reviews.length === 0) return null;

  const displayedReviews = reviews.slice(0, 2);

  return (
    <div className="px-4 mt-6" data-testid="reviews-list">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Reviews ({reviews.length})</h3>
        {reviews.length > 2 && (
          <button
            onClick={onSeeAll}
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            data-testid="see-all-reviews-btn"
          >
            See all
          </button>
        )}
      </div>
      <div className="space-y-4">
        {displayedReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
