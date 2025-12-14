'use client';

interface KYCProgressBarProps {
  currentStep: number;
  totalSteps: number;
  stepName: string;
}

export default function KYCProgressBar({ currentStep, totalSteps, stepName }: KYCProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="px-4 pt-4 pb-2" data-testid="kyc-progress-bar">
      <p className="text-subtle-light dark:text-subtle-dark text-sm font-medium" data-testid="progress-label">
        Step {currentStep} of {totalSteps}: {stepName}
      </p>
      <div className="mt-2 h-2 w-full rounded-full bg-primary/20">
        <div
          className="h-2 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
          data-testid="progress-fill"
        />
      </div>
    </div>
  );
}
