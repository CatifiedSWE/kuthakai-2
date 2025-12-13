'use client';

import { useRouter } from 'next/navigation';
import { ProfileAppBar } from '@/modules/profile';
import { SettingsSection, SettingsItem, SettingsToggle } from '../components';

export default function SettingsScreen() {
  const router = useRouter();

  const handleLogout = () => {
    console.log('User logged out');
    // Add logout logic here (clear session, redirect, etc.)
    // router.push('/login');
  };

  return (
    <div 
      className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark"
      data-testid="settings-screen"
    >
      {/* Top App Bar */}
      <ProfileAppBar title="Settings" showBackButton={true} />

      {/* Main Content */}
      <div className="flex-grow px-4">
        {/* Account Section */}
        <SettingsSection title="Account">
          <SettingsItem
            icon="person"
            label="Edit Profile"
            href="/profile/edit"
          />
          <SettingsItem
            icon="lock"
            label="Change Password"
            href="/profile/change-password"
          />
          <SettingsItem
            icon="credit_card"
            label="Payment Methods"
            href="/profile/payment-methods"
            showDivider={false}
          />
        </SettingsSection>

        {/* Notifications Section */}
        <SettingsSection title="Notifications">
          <SettingsToggle
            icon="notifications"
            label="Push Notifications"
            defaultEnabled={true}
          />
          <SettingsToggle
            icon="mail"
            label="Email Alerts"
            defaultEnabled={false}
            showDivider={false}
          />
        </SettingsSection>

        {/* Support Section */}
        <SettingsSection title="Support">
          <SettingsItem
            icon="help_center"
            label="Help Center / FAQ"
            href="/faq-help-center"
          />
          <SettingsItem
            icon="support_agent"
            label="Contact Us"
            href="/contact-support"
          />
          <SettingsItem
            icon="shield"
            label="Privacy Policy"
            href="/legal/privacy-policy"
            showDivider={false}
          />
        </SettingsSection>
      </div>

      {/* Log Out Button */}
      <div className="w-full p-4 mt-8 pb-8">
        <button
          onClick={handleLogout}
          className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary/10 px-4 text-base font-bold text-primary transition-colors hover:bg-primary/20 active:bg-primary/30"
          data-testid="settings-logout-button"
        >
          <span className="material-symbols-outlined">logout</span>
          Log Out
        </button>
      </div>
    </div>
  );
}
