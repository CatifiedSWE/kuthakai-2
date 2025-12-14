import React from 'react';

interface PageIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function PageIndicator({ currentStep, totalSteps }: PageIndicatorProps) {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-3 py-5" data-testid="page-indicator">
      {Array.from({ length: totalSteps }, (_, index) => {
        const isActive = index + 1 === currentStep;
        return (
          <div
            key={index}
            data-testid={`indicator-dot-${index + 1}`}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              isActive
                ? 'bg-primary'
                : 'bg-primary/20 dark:bg-primary/40'
            }`}
          />
        );
      })}
    </div>
  );
}
