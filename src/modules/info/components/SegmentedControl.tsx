"use client";

import { useState } from 'react';

export interface SegmentedControlProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function SegmentedControl({ options, defaultValue, onChange }: SegmentedControlProps) {
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="flex px-4 py-3">
      <div className="flex h-12 flex-1 items-center justify-center rounded-full bg-[#EAE5E4] dark:bg-background-dark/50 p-1">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-full px-2 has-[:checked]:bg-white has-[:checked]:dark:bg-primary/20 has-[:checked]:shadow-[0_1px_3px_rgba(0,0,0,0.1)] has-[:checked]:text-primary text-[#757575] dark:text-gray-400 text-sm font-bold leading-normal transition-colors duration-300"
          >
            <span className="truncate">{option}</span>
            <input
              checked={selected === option}
              onChange={() => handleChange(option)}
              className="invisible w-0"
              type="radio"
              name="user-type"
              value={option}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
