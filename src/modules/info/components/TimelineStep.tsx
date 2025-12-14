"use client";

export interface TimelineStepProps {
  stepNumber: number;
  icon: string;
  title: string;
  description: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function TimelineStep({
  stepNumber,
  icon,
  title,
  description,
  isFirst = false,
  isLast = false,
}: TimelineStepProps) {
  return (
    <>
      {/* Step Indicator */}
      <div className={`flex flex-col items-center gap-1 ${isFirst ? 'pt-3' : ''} ${isLast ? 'pb-3' : ''}`}>
        {!isFirst && <div className="w-0.5 bg-primary/30 h-full grow"></div>}
        <div className="flex items-center justify-center size-10 rounded-full bg-primary/20 text-primary font-bold text-lg">
          {stepNumber}
        </div>
        {!isLast && <div className="w-0.5 bg-primary/30 h-full grow"></div>}
      </div>

      {/* Step Content */}
      <div className="flex flex-1 flex-col py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">{icon}</span>
          <p className="text-[#333333] dark:text-white text-lg font-semibold leading-normal">{title}</p>
        </div>
        <p className="text-[#757575] dark:text-gray-400 text-base font-normal leading-normal mt-1 ml-1">
          {description}
        </p>
      </div>
    </>
  );
}
