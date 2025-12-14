// Chat module types

export interface ChatMessageType {
  id: string;
  text: string;
  timestamp?: string;
  isSent: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

export interface ChatUser {
  id: string;
  name: string;
  avatar: string;
}

export interface ChatConversation {
  id: string;
  otherUser: ChatUser;
  item: string;
  messages: ChatMessageType[];
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
}
