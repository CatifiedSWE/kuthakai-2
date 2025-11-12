'use client';

import { useState } from 'react';
import { defaultLocation } from '@/demo';

export default function MobileTopbar() {
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);

  return (
    <header className="lg:hidden sticky top-0 z-50 w-full bg-white dark:bg-[#221210] border-b border-gray-200 dark:border-white/10">
      <div className="flex items-center justify-between px-4 py-1.5 h-14">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-[#f86b59]">Kuthakai</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Location */}
          <button className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[#f86b59] text-xl">location_on</span>
            <span className="text-sm font-semibold text-[#181211] dark:text-white">
              {currentLocation.name}
            </span>
          </button>

          {/* Profile */}
          <button className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10">
            <span className="material-symbols-outlined text-[#181211] dark:text-white text-xl">
              account_circle
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
