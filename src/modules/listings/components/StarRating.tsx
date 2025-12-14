'use client';

import React, { useState } from 'react';

interface StarRatingProps {
  maxStars?: number;
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
}

export default function StarRating({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
}: StarRatingProps) {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRatingChange?.(value);
  };

  return (
    <div className="flex items-center justify-center gap-2 py-4" data-testid="star-rating">
      {Array.from({ length: maxStars }, (_, i) => i + 1).map((value) => (
        <button
          key={value}
          onClick={() => handleClick(value)}
          onMouseEnter={() => setHoverRating(value)}
          onMouseLeave={() => setHoverRating(0)}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded"
          aria-label={`Rate ${value} stars`}
          data-testid={`star-${value}`}
        >
          <span
            className={`material-symbols-outlined ${
              value <= (hoverRating || rating)
                ? 'text-primary'
                : 'text-neutral-200 dark:text-neutral-900/50'
            }`}
            style={{
              fontSize: '36px',
              fontVariationSettings:
                value <= (hoverRating || rating) ? "'FILL' 1" : "'FILL' 0",
            }}
          >
            star
          </span>
        </button>
      ))}
    </div>
  );
}
