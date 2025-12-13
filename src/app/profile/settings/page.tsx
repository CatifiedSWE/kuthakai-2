import { SettingsScreen } from '@/modules/settings';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings - Kuthakai',
  description: 'Manage your account settings and preferences',
};

export default function SettingsPage() {
  return <SettingsScreen />;
}
