'use client';

import { useRouter } from 'next/navigation';
import {
  DashboardAppBar,
  EarningsChart,
  BookingCard,
  NotificationCard,
  FloatingActionButton,
} from '../components';
import { UserDashboard, EarningsData, Booking, Notification } from '../types';

interface OverviewScreenProps {
  user: UserDashboard;
  earnings: EarningsData;
  bookings: Booking[];
  notifications: Notification[];
}

export default function OverviewScreen({
  user,
  earnings,
  bookings,
  notifications,
}: OverviewScreenProps) {
  const router = useRouter();

  const handleViewAllBookings = () => {
    console.log('View all bookings');
    // Navigate to bookings page when available
    // router.push('/bookings');
  };

  const handleViewAllNotifications = () => {
    console.log('View all notifications');
    // Navigate to notifications page when available
    // router.push('/notifications');
  };

  const handleBookingClick = (booking: Booking) => {
    console.log('Booking clicked:', booking);
    // Navigate to booking details
    // router.push(`/bookings/${booking.id}`);
  };

  const handleNotificationClick = (notification: Notification) => {
    console.log('Notification clicked:', notification);
    // Navigate to notification details or relevant page
  };

  const handleAddItem = () => {
    console.log('Add new item');
    router.push('/list-item');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* Top App Bar */}
      <DashboardAppBar userName={user.userName} userAvatar={user.userAvatar} />

      {/* Main Content */}
      <main className="flex-1 px-4 pb-28">
        {/* Earnings Chart */}
        <EarningsChart data={earnings} />

        {/* Upcoming Bookings Section */}
        <div className="flex items-center justify-between pt-5 pb-3">
          <h2 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold leading-tight tracking-[-0.015em]">
            Upcoming Bookings
          </h2>
          <button
            onClick={handleViewAllBookings}
            className="text-primary text-sm font-medium hover:underline"
            data-testid="view-all-bookings"
          >
            View All
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onClick={handleBookingClick}
            />
          ))}
        </div>

        {/* Recent Notifications Section */}
        <div className="flex items-center justify-between pt-8 pb-3">
          <h2 className="text-text-primary-light dark:text-text-primary-dark text-xl font-bold leading-tight tracking-[-0.015em]">
            Recent Notifications
          </h2>
          <button
            onClick={handleViewAllNotifications}
            className="text-primary text-sm font-medium hover:underline"
            data-testid="view-all-notifications"
          >
            View All
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onClick={handleNotificationClick}
            />
          ))}
        </div>
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton onClick={handleAddItem} />
    </div>
  );
}
