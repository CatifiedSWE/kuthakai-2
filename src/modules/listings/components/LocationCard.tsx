'use client';

import { ItemLocation } from '../types';

interface LocationCardProps {
  location: ItemLocation;
}

export default function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="px-4 mt-6" data-testid="location-card">
      <h3 className="text-lg font-bold mb-3">Location</h3>
      <div className="overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
        <img
          className="h-48 w-full object-cover"
          src={location.mapImage}
          alt={location.mapAlt}
          data-testid="location-map"
        />
        <p className="p-4 text-base font-medium text-text-secondary-light dark:text-text-secondary-dark" data-testid="location-address">
          {location.address}
        </p>
      </div>
    </div>
  );
}
