"use client";

import { useState } from 'react';
import ChatMessage from '../components/ChatMessage';
import DateSeparator from '../components/DateSeparator';
import TypingIndicator from '../components/TypingIndicator';
import ChatInput from '../components/ChatInput';
import { ChatConversation, ChatMessageType } from '../types';

interface ChatScreenProps {
  conversation: ChatConversation;
  onBack?: () => void;
  onSendMessage?: (message: string) => void;
  showTyping?: boolean;
}

export default function ChatScreen({
  conversation,
  onBack,
  onSendMessage,
  showTyping = false,
}: ChatScreenProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>(conversation.messages);

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessageType = {
      id: Date.now().toString(),
      text: message,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      isSent: true,
      status: 'sent',
    };
    setMessages([...messages, newMessage]);
    onSendMessage?.(message);
  };

  return (
    <div className="relative flex h-screen w-full flex-col bg-[#fbfdfc] dark:bg-[#1C1C1E] group/design-root overflow-hidden">
      {/* Top App Bar */}
      <header className="sticky top-0 z-10 flex items-center bg-[#fbfdfc]/80 dark:bg-[#1C1C1E]/80 backdrop-blur-sm p-3 gap-3 border-b border-[#E5E5EA]/50 dark:border-[#2C2C2E]/50">
        <button
          onClick={onBack}
          data-testid="chat-back-button"
          className="flex items-center justify-center size-10 text-[#1C1C1E] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-11 shrink-0"
          style={{ backgroundImage: `url(${conversation.otherUser.avatar})` }}
        ></div>
        <div className="flex-1 min-w-0">
          <h2 className="text-[#1C1C1E] dark:text-white text-base font-bold leading-tight truncate">
            {conversation.otherUser.name}
          </h2>
          <p className="text-[#8A8A8E] text-xs leading-tight truncate">
            Discussing: {conversation.item}
          </p>
        </div>
        <button
          data-testid="chat-more-options"
          className="flex items-center justify-center size-10 text-[#1C1C1E] dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">more_vert</span>
        </button>
      </header>

      {/* Chat Body */}
      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-2 space-y-6">
        {/* Date Separator */}
        <DateSeparator date="Today" />

        {/* Messages */}
        {messages.map((msg, index) => {
          const showAvatar = !msg.isSent && (index === 0 || messages[index - 1].isSent);
          return (
            <ChatMessage
              key={msg.id}
              message={msg.text}
              timestamp={msg.isSent ? msg.timestamp : undefined}
              isSent={msg.isSent}
              showAvatar={showAvatar}
              avatarUrl={conversation.otherUser.avatar}
              showStatus={msg.isSent && msg.status === 'read'}
            />
          );
        })}

        {/* Typing Indicator */}
        {showTyping && <TypingIndicator avatarUrl={conversation.otherUser.avatar} />}
      </main>

      {/* Chat Input */}
      <ChatInput onSend={handleSendMessage} placeholder="Type a message..." />
    </div>
  );
}
