import { ChatConversation, ChatMessageType, ChatUser } from '@/modules/chat';

export const demoChatUser: ChatUser = {
  id: 'user-1',
  name: 'John Doe',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBEvGkAtanvUsfg1vGDWxMtJBbJ8x2Br3-bw_Kp_xhsdmQHr5LVwR0K6wQu4LjAAN6O6z5XPJnq2dIEvQ9zwJw-jLE6rwWHCiTe_8jSKKyXN4qKOFSILOvNJLaEzpMKuBSCEG63KlfY5zn653I7eVYxE6LxPLaxpR4floQDkThCAzg073nCWL2vq4aHMz82ofYJBMpcbenxmRbvBV-bUs8JdBEu0Fa-fXQWBzwNZ_EJhDTO23zadA7QrlQoZLryQsd1p19FkL22JsIs',
};

export const demoChatMessages: ChatMessageType[] = [
  {
    id: 'msg-1',
    text: 'Hi! Is the vintage camera still available for this weekend?',
    isSent: false,
  },
  {
    id: 'msg-2',
    text: "Hey John! Yes, it's available. I can have it ready for pickup on Saturday morning.",
    timestamp: '11:32 AM',
    isSent: true,
    status: 'read',
  },
  {
    id: 'msg-3',
    text: 'Perfect! That works for me. See you then!',
    isSent: false,
  },
];

export const demoChatConversation: ChatConversation = {
  id: 'conv-1',
  otherUser: demoChatUser,
  item: 'Vintage Camera',
  messages: demoChatMessages,
  lastMessage: 'Perfect! That works for me. See you then!',
  lastMessageTime: '11:35 AM',
  unreadCount: 0,
};
