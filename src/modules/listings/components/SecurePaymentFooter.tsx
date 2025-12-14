'use client';

import { useState } from 'react';

interface SecurePaymentFooterProps {
  totalAmount: number;
  onConfirmPayment: () => void;
  isProcessing?: boolean;
}

function formatCurrency(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export default function SecurePaymentFooter({
  totalAmount,
  onConfirmPayment,
  isProcessing = false,
}: SecurePaymentFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 p-4 pt-3 border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex items-center justify-center gap-2 pb-3">
        <span className="material-symbols-outlined text-sm text-gray-600 dark:text-gray-400">
          lock
        </span>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Your payment is safe and secure
        </p>
      </div>
      <button
        onClick={onConfirmPayment}
        disabled={isProcessing}
        data-testid="confirm-payment-button"
        className="flex w-full items-center justify-center rounded-full bg-[#f86b59] py-4 px-5 text-center text-base font-bold text-white transition-all hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {isProcessing ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          `Confirm & Pay ${formatCurrency(totalAmount)}`
        )}
      </button>
    </div>
  );
}
