'use client';

import { useState, useEffect } from 'react';

interface DamageDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  error?: string;
}

export default function DamageDescriptionInput({
  value,
  onChange,
  maxLength = 1000,
  error,
}: DamageDescriptionInputProps) {
  const [charCount, setCharCount] = useState(value.length);

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      onChange(newValue);
    }
  };

  return (
    <section className="mb-6">
      <div className="flex items-center justify-between">
        <h2 className="px-0 pb-2 pt-4 text-lg font-bold leading-tight tracking-tight text-zinc-800 dark:text-zinc-200">
          Describe the Damage
        </h2>
        <span
          className={`text-sm font-medium ${
            charCount > maxLength * 0.9
              ? 'text-red-500'
              : 'text-zinc-500 dark:text-zinc-400'
          }`}
        >
          {charCount}/{maxLength}
        </span>
      </div>
      <label className="flex flex-col">
        <textarea
          value={value}
          onChange={handleChange}
          data-testid="damage-description-input"
          className={`form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border p-4 text-base font-normal leading-normal placeholder:text-zinc-400 focus:outline-0 focus:ring-2 dark:placeholder:text-zinc-500 ${
            error
              ? 'border-red-500 bg-red-50 text-red-900 focus:border-red-500 focus:ring-red-500/20 dark:bg-red-900/10 dark:text-red-200'
              : 'border-zinc-200 bg-white text-zinc-800 focus:border-primary focus:ring-primary/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:focus:border-primary/80'
          }`}
          placeholder="Please describe the damage in detail, including where it is located and how it may have happened..."
          rows={5}
        />
      </label>
      {error && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </section>
  );
}
