'use client';

import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <label className="flex flex-col flex-1">
      <p className="text-[#181211] dark:text-white text-base font-medium leading-normal pb-2">
        {label}
      </p>
      <input
        className={`form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#181211] focus:outline-0 focus:ring-2 focus:ring-primary/50 border bg-white focus:border-primary h-14 placeholder:text-[#8a6560] p-[15px] text-base font-normal leading-normal dark:bg-[#2a1d1b] dark:text-white dark:placeholder-gray-500 dark:focus:border-primary dark:border-gray-700 transition-colors ${
          error ? 'border-red-500 dark:border-red-500' : 'border-[#e6dcdb] dark:border-gray-700'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 dark:text-red-400 text-sm mt-1">{error}</p>
      )}
    </label>
  );
}
