'use client';

import { useState } from 'react';

interface SettingsToggleProps {
  icon: string;
  label: string;
  defaultEnabled?: boolean;
  showDivider?: boolean;
  onChange?: (enabled: boolean) => void;
}

export default function SettingsToggle({ 
  icon, 
  label, 
  defaultEnabled = false, 
  showDivider = true,
  onChange 
}: SettingsToggleProps) {
  const [isEnabled, setIsEnabled] = useState(defaultEnabled);

  const handleToggle = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);
    onChange?.(newValue);
    console.log(`${label}: ${newValue ? 'enabled' : 'disabled'}`);
  };

  const testId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <div className="flex min-h-14 items-center justify-between gap-4 p-3">
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <p className="flex-1 truncate text-base font-medium leading-normal text-zinc-900 dark:text-zinc-50">
            {label}
          </p>
        </div>
        <div className="shrink-0">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={isEnabled}
              onChange={handleToggle}
              className="peer sr-only"
              data-testid={`settings-toggle-${testId}`}
            />
            <div className="peer h-7 w-12 rounded-full bg-zinc-200 dark:bg-zinc-700 after:absolute after:start-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:border after:border-white dark:after:border-zinc-600 after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"></div>
          </label>
        </div>
      </div>
      {showDivider && <hr className="border-zinc-100 dark:border-zinc-700 ml-16" />}
    </>
  );
}
