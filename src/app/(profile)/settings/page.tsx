import { ProfileAppBar } from '@/modules/profile';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings - Kuthakai',
  description: 'Manage your account settings',
};

export default function SettingsPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <ProfileAppBar title="Settings" showBackButton={true} />
      
      <div className="flex items-center justify-center flex-1 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#181211] dark:text-white">Coming Soon</h1>
          <p className="text-[#8a6560] dark:text-gray-400">Settings page is under development</p>
        </div>
      </div>
    </div>
  );
}
