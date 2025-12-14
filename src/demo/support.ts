import { SupportOption, EmergencySupport } from '@/modules/support';

export const demoSupportOptions: SupportOption[] = [
  {
    id: 'live-chat',
    title: 'Live Chat',
    description: 'Get instant answers',
    icon: 'chat_bubble',
    link: '/support/chat',
  },
  {
    id: 'email',
    title: 'Email Support',
    description: "We'll reply within 24 hours",
    icon: 'mail',
    link: '/support/email',
  },
];

export const demoEmergencySupport: EmergencySupport = {
  title: '24/7 Emergency Support',
  description: 'For safety concerns or urgent booking problems.',
  phoneNumber: '+91-1800-123-4567',
};
