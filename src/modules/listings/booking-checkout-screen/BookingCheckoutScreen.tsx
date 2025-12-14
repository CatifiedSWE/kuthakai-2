'use client';

import { useState } from 'react';
import { BookingData, PaymentMethod, PaymentOption } from '../types';
import {
  RentalSummaryCard,
  PriceDetailsSection,
  PaymentMethodSelector,
  SecurePaymentFooter,
} from '../components';

interface BookingCheckoutScreenProps {
  bookingData: BookingData;
  paymentOptions: PaymentOption[];
  onBack?: () => void;
}

export default function BookingCheckoutScreen({
  bookingData,
  paymentOptions,
  onBack,
}: BookingCheckoutScreenProps) {
  const [selectedPayment, setSelectedPayment] = useState<PaymentMethod>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePaymentConfirm = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-gray-900">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-down" data-testid="success-toast">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            <span className="font-medium">Payment Confirmed Successfully!</span>
          </div>
        </div>
      )}

      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-white dark:bg-gray-900 p-4 pb-3 justify-between border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={onBack}
          data-testid="back-button"
          className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Booking & Checkout
        </h2>
      </div>

      <main className="flex-grow pb-32">
        {/* Rental Summary Card */}
        <div className="p-4 pt-6">
          <RentalSummaryCard item={bookingData.item} dates={bookingData.dates} />
        </div>

        {/* Divider */}
        <div className="px-4">
          <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Price Details Section */}
        <PriceDetailsSection pricing={bookingData.pricing} />

        {/* Divider */}
        <div className="px-4 pt-4">
          <div className="h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>

        {/* Payment Method Section */}
        <PaymentMethodSelector
          options={paymentOptions}
          selectedMethod={selectedPayment}
          onSelect={setSelectedPayment}
        />
      </main>

      {/* Fixed Bottom CTA Bar */}
      <SecurePaymentFooter
        totalAmount={bookingData.pricing.total}
        onConfirmPayment={handlePaymentConfirm}
        isProcessing={isProcessing}
      />
    </div>
  );
}
