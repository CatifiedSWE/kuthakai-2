import { ProfileScreen } from '@/modules/profile';
import { demoUser, demoProfileItems } from '@/demo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile - Kuthakai',
  description: 'View and manage your Kuthakai profile',
};

export default function ProfilePage() {
  return <ProfileScreen user={demoUser} items={demoProfileItems} />;
}
