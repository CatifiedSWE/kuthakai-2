"use client";

import { ChatScreen } from '@/modules/chat';
import { demoChatConversation } from '@/demo/chat';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSendMessage = (message: string) => {
    console.log('Message sent:', message);
    // Handle sending message to backend
  };

  return (
    <ChatScreen
      conversation={demoChatConversation}
      onBack={handleBack}
      onSendMessage={handleSendMessage}
      showTyping={true}
    />
  );
}
