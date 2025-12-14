import { BookingCheckoutScreen } from '@/modules/listings';
import { demoBooking, demoPaymentOptions } from '@/demo';

export const metadata = {
  title: 'Booking & Checkout - Kuthakai',
  description: 'Complete your rental booking and make secure payment',
};

export default function Page() {
  return (
    <BookingCheckoutScreen
      bookingData={demoBooking}
      paymentOptions={demoPaymentOptions}
    />
  );
}
