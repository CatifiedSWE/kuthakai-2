'use client';

import { useState } from 'react';
import { SupportOption, EmergencySupport } from '../types';
import { SupportOptionCard, EmergencyCard, BottomNavigation } from '../components';

interface ContactSupportScreenProps {
  supportOptions: SupportOption[];
  emergencySupport: EmergencySupport;
  onBack?: () => void;
}

export default function ContactSupportScreen({
  supportOptions,
  emergencySupport,
  onBack,
}: ContactSupportScreenProps) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleSupportClick = (option: SupportOption) => {
    setNotificationMessage(`Opening ${option.title}...`);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const handleNavigation = (id: string) => {
    console.log('Navigate to:', id);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-gray-900">
      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-down" data-testid="notification-toast">
          <span className="font-medium">{notificationMessage}</span>
        </div>
      )}

      <div className="flex flex-col grow">
        {/* Top App Bar */}
        <header className="flex items-center bg-white dark:bg-gray-900 p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={onBack}
            data-testid="back-button"
            className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Contact & Support
          </h1>
          <div className="size-10 shrink-0"></div> {/* Spacer for centering title */}
        </header>

        {/* Main Content */}
        <main className="flex-grow p-4 space-y-4">
          {/* Support Options List */}
          {supportOptions.map((option) => (
            <SupportOptionCard
              key={option.id}
              option={option}
              onClick={() => handleSupportClick(option)}
            />
          ))}

          {/* Emergency Support Card */}
          <EmergencyCard emergency={emergencySupport} />
        </main>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavigation onNavigate={handleNavigation} />
    </div>
  );
}
