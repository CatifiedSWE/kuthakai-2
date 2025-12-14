'use client';

import { PaymentMethod, PaymentOption } from '../types';

interface PaymentMethodSelectorProps {
  options: PaymentOption[];
  selectedMethod: PaymentMethod;
  onSelect: (method: PaymentMethod) => void;
}

export default function PaymentMethodSelector({
  options,
  selectedMethod,
  onSelect,
}: PaymentMethodSelectorProps) {
  return (
    <div>
      <h3 className="text-gray-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-5">
        Select Payment Method
      </h3>
      <div className="space-y-3 px-4">
        {options.map((option) => {
          const isSelected = selectedMethod === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onSelect(option.id)}
              data-testid={`payment-method-${option.id}`}
              className={`flex items-center justify-between gap-4 w-full rounded-lg p-4 transition-all hover:shadow-md ${
                isSelected
                  ? 'border-2 border-[#f86b59] bg-[#f86b59]/10'
                  : 'border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-4">
                {option.imageUrl ? (
                  <img
                    className="h-6"
                    src={option.imageUrl}
                    alt={`${option.name} logo`}
                  />
                ) : (
                  <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 text-2xl">
                    {option.icon}
                  </span>
                )}
                <p className="text-gray-900 dark:text-white text-base font-medium">
                  {option.name}
                </p>
              </div>
              <div
                className={`flex size-6 items-center justify-center rounded-full border-2 ${
                  isSelected
                    ? 'border-[#f86b59]'
                    : 'border-gray-300 dark:border-gray-600'
                }`}
              >
                {isSelected && <div className="size-3 rounded-full bg-[#f86b59]"></div>}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
