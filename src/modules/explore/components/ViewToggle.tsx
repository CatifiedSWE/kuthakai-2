'use client';

import { useState } from 'react';
import { ViewMode } from '../types';

interface ViewToggleProps {
  defaultView?: ViewMode;
  onChange?: (view: ViewMode) => void;
}

export default function ViewToggle({ defaultView = 'grid', onChange }: ViewToggleProps) {
  const [selectedView, setSelectedView] = useState<ViewMode>(defaultView);

  const handleChange = (view: ViewMode) => {
    setSelectedView(view);
    if (onChange) {
      onChange(view);
    }
  };

  return (
    <div className="flex px-4 py-3" data-testid="view-toggle">
      <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-gray-100 dark:bg-surface-dark p-1.5">
        <label
          className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 transition-all duration-200 ${
            selectedView === 'grid'
              ? 'bg-white dark:bg-gray-600 shadow-md text-text-primary-light dark:text-text-primary-dark'
              : 'text-text-secondary-light dark:text-text-secondary-dark'
          } text-sm font-medium leading-normal gap-2`}
        >
          <span className="material-symbols-outlined text-base">grid_view</span>
          <span className="truncate">Grid View</span>
          <input
            className="invisible w-0"
            name="view-toggle"
            type="radio"
            value="grid"
            checked={selectedView === 'grid'}
            onChange={() => handleChange('grid')}
            data-testid="view-grid"
          />
        </label>
        <label
          className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 transition-all duration-200 ${
            selectedView === 'map'
              ? 'bg-white dark:bg-gray-600 shadow-md text-text-primary-light dark:text-text-primary-dark'
              : 'text-text-secondary-light dark:text-text-secondary-dark'
          } text-sm font-medium leading-normal gap-2`}
        >
          <span className="material-symbols-outlined text-base">map</span>
          <span className="truncate">Map View</span>
          <input
            className="invisible w-0"
            name="view-toggle"
            type="radio"
            value="map"
            checked={selectedView === 'map'}
            onChange={() => handleChange('map')}
            data-testid="view-map"
          />
        </label>
      </div>
    </div>
  );
}
