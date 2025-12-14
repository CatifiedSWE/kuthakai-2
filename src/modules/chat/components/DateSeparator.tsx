"use client";

export default function DateSeparator({ date }: { date: string }) {
  return (
    <div className="flex justify-center">
      <span className="text-xs font-medium text-[#8A8A8E] bg-[#E5E5EA] dark:bg-[#2C2C2E] rounded-full px-3 py-1">
        {date}
      </span>
    </div>
  );
}
