'use client';

import { ItemOwner } from '../types';

interface OwnerCardProps {
  owner: ItemOwner;
  onViewProfile?: () => void;
}

export default function OwnerCard({ owner, onViewProfile }: OwnerCardProps) {
  return (
    <div className="px-4" data-testid="owner-card">
      <h3 className="text-lg font-bold mb-3">Listed by</h3>
      <div className="flex items-center justify-between p-4 rounded-lg bg-background-light dark:bg-black/20 border border-border-light dark:border-border-dark">
        <div className="flex items-center gap-4">
          <img
            className="size-14 rounded-full object-cover"
            src={owner.avatar}
            alt={`Profile picture of ${owner.name}`}
            data-testid="owner-avatar"
          />
          <div>
            <p className="font-bold text-lg" data-testid="owner-name">{owner.name}</p>
            <div className="flex items-center gap-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <span
                className="material-symbols-outlined !text-base text-star-gold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-semibold text-text-primary-light dark:text-text-primary-dark" data-testid="owner-rating">
                {owner.rating}
              </span>
              <span data-testid="owner-review-count">({owner.reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        <button
          onClick={onViewProfile}
          className="hover:opacity-70 transition-opacity"
          aria-label="View owner profile"
          data-testid="view-owner-profile-btn"
        >
          <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}
