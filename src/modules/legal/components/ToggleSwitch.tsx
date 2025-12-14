"use client";

import { useState } from 'react';

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  testId?: string;
}

export default function ToggleSwitch({ defaultChecked = false, onChange, testId }: ToggleSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label
      className="relative flex h-[31px] w-[51px] cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-slate-700 p-0.5 has-[:checked]:justify-end has-[:checked]:bg-primary transition-all duration-300"
    >
      <div
        className="h-full w-[27px] rounded-full bg-white transition-transform duration-300"
        style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 3px 8px, rgba(0, 0, 0, 0.06) 0px 3px 1px' }}
      ></div>
      <input
        data-testid={testId}
        className="invisible absolute"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
}
