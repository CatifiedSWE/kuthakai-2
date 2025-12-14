import { OverviewScreen } from '@/modules/dashboard';
import {
  demoUserDashboard,
  demoEarnings,
  demoBookings,
  demoNotifications,
} from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Overview - Kuthakai',
  description: 'View your earnings, upcoming bookings, and recent notifications',
};

export default function Page() {
  return (
    <OverviewScreen
      user={demoUserDashboard}
      earnings={demoEarnings}
      bookings={demoBookings}
      notifications={demoNotifications}
    />
  );
}
