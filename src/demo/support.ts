import { SupportOption, EmergencySupport, FAQCategory } from '@/modules/support';

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

export const demoFAQCategories: FAQCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'rocket_launch',
    link: '/faq/getting-started',
  },
  {
    id: 'renting-process',
    title: 'Renting Process',
    icon: 'key',
    link: '/faq/renting-process',
  },
  {
    id: 'listing-item',
    title: 'Listing an Item',
    icon: 'sell',
    link: '/faq/listing-item',
  },
  {
    id: 'payments-payouts',
    title: 'Payments & Payouts',
    icon: 'payments',
    link: '/faq/payments-payouts',
  },
  {
    id: 'deposits-refunds',
    title: 'Deposits & Refunds',
    icon: 'receipt_long',
    link: '/faq/deposits-refunds',
  },
  {
    id: 'account-verification',
    title: 'Account Verification',
    icon: 'verified_user',
    link: '/faq/account-verification',
  },
  {
    id: 'trust-safety',
    title: 'Trust & Safety',
    icon: 'health_and_safety',
    link: '/faq/trust-safety',
  },
];
