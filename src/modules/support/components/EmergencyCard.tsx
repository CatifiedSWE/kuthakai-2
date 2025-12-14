'use client';

import { EmergencySupport } from '../types';
import { useState } from 'react';

interface EmergencyCardProps {
  emergency: EmergencySupport;
}

export default function EmergencyCard({ emergency }: EmergencyCardProps) {
  const [showCallConfirm, setShowCallConfirm] = useState(false);

  const handleCallClick = () => {
    setShowCallConfirm(true);
    setTimeout(() => {
      setShowCallConfirm(false);
    }, 3000);
  };

  return (
    <div className="pt-6">
      {/* Call Confirmation Toast */}
      {showCallConfirm && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-down" data-testid="call-confirm-toast">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">phone</span>
            <span className="font-medium">Calling {emergency.phoneNumber}...</span>
          </div>
        </div>
      )}

      <div className="flex flex-col items-stretch justify-start rounded-lg bg-[#f86b59]/20 dark:bg-[#f86b59]/30 p-4">
        <div className="flex w-full grow flex-col items-stretch justify-center gap-2">
          <p className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            {emergency.title}
          </p>
          <p className="text-gray-700 dark:text-gray-200 text-base font-normal leading-normal">
            {emergency.description}
          </p>
          <div className="pt-2">
            <button
              onClick={handleCallClick}
              data-testid="emergency-call-button"
              className="flex w-full min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[#f86b59] text-white text-base font-medium leading-normal shadow-md hover:opacity-90 transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined mr-2">phone</span>
              <span className="truncate">Call Us Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
