interface StepProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepProgressBar({ currentStep, totalSteps }: StepProgressBarProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="flex flex-col gap-2 px-4 pt-2 pb-4">
      <div className="flex gap-6 justify-between">
        <p className="text-sm font-medium leading-normal">
          Step {currentStep} of {totalSteps}
        </p>
      </div>
      <div className="rounded-full bg-border-light/50 dark:bg-border-dark/50">
        <div
          className="h-1.5 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
          data-testid="progress-bar"
        />
      </div>
    </div>
  );
}
