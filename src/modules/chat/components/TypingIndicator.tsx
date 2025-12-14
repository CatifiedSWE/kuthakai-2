"use client";

export default function TypingIndicator({ avatarUrl }: { avatarUrl?: string }) {
  return (
    <div className="flex items-end gap-2.5" data-testid="typing-indicator">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0"
        style={{ backgroundImage: avatarUrl ? `url(${avatarUrl})` : 'none' }}
      ></div>
      <div className="flex items-center gap-1.5 rounded-lg rounded-bl-none px-4 py-3 bg-[#E5E5EA] dark:bg-[#2C2C2E]">
        <div className="size-2 bg-[#8A8A8E] rounded-full animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        <div className="size-2 bg-[#8A8A8E] rounded-full animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite_0.2s]"></div>
        <div className="size-2 bg-[#8A8A8E] rounded-full animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite_0.4s]"></div>
      </div>
    </div>
  );
}
