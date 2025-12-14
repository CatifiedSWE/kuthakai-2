# Chat Module

Handles in-app messaging and chat functionality.

## Structure

```
chat/
├── components/
│   ├── ChatMessage.tsx            # Individual chat message
│   ├── DateSeparator.tsx          # Date separator component
│   ├── TypingIndicator.tsx        # Typing animation
│   ├── ChatInput.tsx              # Message input component
│   └── index.ts                   # Barrel export
├── chat-screen/
│   ├── ChatScreen.tsx             # Main chat screen
│   └── index.ts                   # Barrel export
├── types.ts                       # TypeScript interfaces
├── index.ts                       # Main module export
└── README.md                      # This file
```

## Components

### ChatMessage
Displays a single chat message (sent or received).

**Props:**
- `message: string` - Message text
- `timestamp?: string` - Message timestamp
- `isSent: boolean` - Whether message is sent by current user
- `showAvatar?: boolean` - Show user avatar
- `avatarUrl?: string` - Avatar image URL
- `showStatus?: boolean` - Show read status (double check)

**Features:**
- Different styling for sent/received messages
- Avatar display for received messages
- Read status indicator
- Responsive bubble design

### DateSeparator
Shows date separator between messages.

**Props:**
- `date: string` - Date label (e.g., "Today", "Yesterday")

**Features:**
- Centered layout
- Subtle styling
- Dark mode support

### TypingIndicator
Animated typing indicator for when other user is typing.

**Props:**
- `avatarUrl?: string` - User avatar URL

**Features:**
- Three-dot animation
- Staggered pulse effect
- Avatar display

### ChatInput
Message input field with send button.

**Props:**
- `onSend?: (message: string) => void` - Send message callback
- `placeholder?: string` - Input placeholder text

**Features:**
- Auto-clearing after send
- Enter key to send
- Disabled state when empty
- Send button animation

### ChatScreen
Main chat screen composing all chat components.

**Props:**
- `conversation: ChatConversation` - Conversation data
- `onBack?: () => void` - Back navigation handler
- `onSendMessage?: (message: string) => void` - Send message handler
- `showTyping?: boolean` - Show typing indicator

**Features:**
- Sticky header with user info
- Scrollable message list
- Real-time message updates
- Date separators
- Typing indicator
- Message input
- Mobile-optimized layout

## Usage

```tsx
import { ChatScreen } from '@/modules/chat';
import { demoChatConversation } from '@/demo/chat';

export default function Page() {
  return (
    <ChatScreen
      conversation={demoChatConversation}
      showTyping={true}
    />
  );
}
```

## Types

```typescript
interface ChatMessageType {
  id: string;
  text: string;
  timestamp?: string;
  isSent: boolean;
  status?: 'sent' | 'delivered' | 'read';
}

interface ChatUser {
  id: string;
  name: string;
  avatar: string;
}

interface ChatConversation {
  id: string;
  otherUser: ChatUser;
  item: string;
  messages: ChatMessageType[];
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
}
```

## Interactive Features

- ✅ Send messages with Enter key or button
- ✅ Auto-scroll to latest message
- ✅ Typing indicator animation
- ✅ Read status display
- ✅ Avatar display management
- ✅ Responsive bubble layout
- ✅ Dark mode support
- ✅ Smooth transitions
