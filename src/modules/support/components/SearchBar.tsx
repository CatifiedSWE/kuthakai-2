"use client";

import { useState } from 'react';

export default function SearchBar({ placeholder = "How can we help?", onSearch }: { placeholder?: string; onSearch?: (query: string) => void }) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <div className="px-4 py-3">
      <label className="flex flex-col min-w-40 h-14 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-[#f0f0f0] dark:bg-[#3a2a28]">
          <div className="text-primary flex items-center justify-center pl-4">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            data-testid="faq-search-input"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#333333] dark:text-[#f8f6f5] focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-[#888888] dark:placeholder:text-[#a09290] px-2 text-base font-normal leading-normal"
            placeholder={placeholder}
            value={query}
            onChange={handleChange}
          />
        </div>
      </label>
    </div>
  );
}
