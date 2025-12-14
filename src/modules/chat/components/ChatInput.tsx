"use client";

import { useState } from 'react';

interface ChatInputProps {
  onSend?: (message: string) => void;
  placeholder?: string;
}

export default function ChatInput({ onSend, placeholder = "Type a message..." }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend?.(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <footer className="sticky bottom-0 z-10 flex items-center p-3 gap-3 bg-[#fbfdfc] dark:bg-[#1C1C1E] border-t border-[#E5E5EA]/50 dark:border-[#2C2C2E]/50">
      <div className="relative flex w-full min-w-0 flex-1 items-stretch rounded-full h-12">
        <input
          data-testid="chat-input"
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-[#1C1C1E] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#E5E5EA] dark:bg-[#2C2C2E] h-full placeholder:text-[#8A8A8E] px-5 pr-12 text-base font-normal leading-normal"
          placeholder={placeholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleSend}
          data-testid="chat-send-button"
          className="flex items-center justify-center shrink-0 absolute right-1 top-1/2 -translate-y-1/2 size-10 rounded-full bg-primary text-white cursor-pointer hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!message.trim()}
        >
          <span className="material-symbols-outlined">send</span>
        </button>
      </div>
    </footer>
  );
}
