'use client';

import { useState } from 'react';
import { EarningsPeriod } from '../types';

interface SegmentedButtonProps {
  options: { label: string; value: EarningsPeriod }[];
  defaultValue?: EarningsPeriod;
  onChange?: (value: EarningsPeriod) => void;
}

export default function SegmentedButton({
  options,
  defaultValue,
  onChange,
}: SegmentedButtonProps) {
  const [selected, setSelected] = useState<EarningsPeriod>(defaultValue || options[0].value);

  const handleChange = (value: EarningsPeriod) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex px-4 py-3" data-testid="segmented-button">
      <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-gray-100 dark:bg-surface-dark p-1.5">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 transition-all duration-200 ${
              selected === option.value
                ? 'bg-white dark:bg-gray-700 shadow-[0_2px_8px_rgba(0,0,0,0.1)] text-text-primary dark:text-white'
                : 'text-text-secondary dark:text-gray-400'
            } text-sm font-medium leading-normal`}
          >
            <span className="truncate">{option.label}</span>
            <input
              className="invisible w-0"
              name="earnings_period"
              type="radio"
              value={option.value}
              checked={selected === option.value}
              onChange={() => handleChange(option.value)}
              data-testid={`period-${option.value}`}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
