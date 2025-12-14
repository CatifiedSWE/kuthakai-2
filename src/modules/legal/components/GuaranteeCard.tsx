"use client";

import { GuaranteeOption } from '../types';
import ToggleSwitch from './ToggleSwitch';

interface GuaranteeCardProps {
  option: GuaranteeOption;
  onToggle?: (id: string, enabled: boolean) => void;
}

export default function GuaranteeCard({ option, onToggle }: GuaranteeCardProps) {
  const handleToggle = (enabled: boolean) => {
    onToggle?.(option.id, enabled);
  };

  return (
    <div
      data-testid={`guarantee-card-${option.id}`}
      className="flex gap-4 bg-background-light dark:bg-background-dark p-4 justify-between rounded-lg border border-slate-200 dark:border-slate-800"
    >
      <div className="flex items-start gap-4">
        <div className="text-slate-800 dark:text-slate-200 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0 size-12">
          <span className="material-symbols-outlined text-primary">{option.icon}</span>
        </div>
        <div className="flex flex-1 flex-col justify-center gap-1">
          <p className="text-slate-900 dark:text-slate-50 text-base font-medium leading-normal">
            {option.title}
          </p>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
            {option.description}
          </p>
        </div>
      </div>
      {option.hasToggle && (
        <div className="shrink-0 flex items-center">
          <ToggleSwitch
            defaultChecked={option.defaultEnabled}
            onChange={handleToggle}
            testId={`toggle-${option.id}`}
          />
        </div>
      )}
    </div>
  );
}
