import { MyRentalsScreen } from '@/modules/rentals';
import { demoRentals } from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Rentals - Kuthakai',
  description: 'View and manage your active, upcoming, and past rentals.',
};

export default function Page() {
  return <MyRentalsScreen rentals={demoRentals} />;
}
