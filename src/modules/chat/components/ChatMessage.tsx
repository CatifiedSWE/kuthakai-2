"use client";

export interface ChatMessageProps {
  message: string;
  timestamp?: string;
  isSent: boolean;
  showAvatar?: boolean;
  avatarUrl?: string;
  showStatus?: boolean;
}

export default function ChatMessage({
  message,
  timestamp,
  isSent,
  showAvatar = false,
  avatarUrl,
  showStatus = false,
}: ChatMessageProps) {
  if (isSent) {
    return (
      <div className="flex items-end gap-2.5 justify-end" data-testid="chat-message-sent">
        <div className="flex flex-1 flex-col gap-1.5 items-end">
          <p className="text-base font-normal leading-normal flex max-w-[80%] rounded-lg rounded-br-none px-4 py-2.5 bg-primary text-white">
            {message}
          </p>
          {(timestamp || showStatus) && (
            <div className="flex items-center gap-1 text-[#8A8A8E]">
              {timestamp && <span className="text-xs">{timestamp}</span>}
              {showStatus && <span className="material-symbols-outlined !text-base">done_all</span>}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-end gap-2.5" data-testid="chat-message-received">
      {showAvatar ? (
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-8 h-8 shrink-0"
          style={{ backgroundImage: avatarUrl ? `url(${avatarUrl})` : 'none' }}
        ></div>
      ) : (
        <div className="w-8 shrink-0"></div>
      )}
      <div className="flex flex-1 flex-col gap-1.5 items-start">
        <p className="text-base font-normal leading-normal flex max-w-[80%] rounded-lg rounded-bl-none px-4 py-2.5 bg-[#E5E5EA] dark:bg-[#2C2C2E] text-[#1C1C1E] dark:text-white">
          {message}
        </p>
      </div>
    </div>
  );
}
