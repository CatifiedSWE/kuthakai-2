import { GuaranteeOption, PrivacyPolicyContent } from '@/modules/legal';

export const demoGuaranteeOptions: GuaranteeOption[] = [
  {
    id: 'damage-cover',
    title: 'Optional Damage Cover',
    description: 'Ideal for renters. Protection against unexpected costs. This covers accidental damage to items during a rental period.',
    icon: 'camera',
    hasToggle: true,
    defaultEnabled: false,
  },
  {
    id: 'owner-guarantee',
    title: 'Kuthakai Owner Guarantee',
    description: 'Included for owners. List your items worry-free. Get reimbursement for damage or theft up to a specified coverage limit.',
    icon: 'shield',
    hasToggle: false,
  },
];

export const demoPrivacyPolicyContent: PrivacyPolicyContent = {
  title: 'Privacy Policy',
  lastUpdated: 'October 26, 2023',
  introduction: 'Welcome to Kuthakai. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.',
  sections: [
    {
      id: 'data-collection',
      heading: '1. Data We Collect',
      subheading: 'Information You Provide to Us',
      content: 'We collect information that you voluntarily provide to us when you register on the Application, express an interest in obtaining information about us or our products and services, when you participate in activities on the Application, or otherwise when you contact us. This includes:',
      items: [
        'Personal identification information (Name, email address, phone number, etc.)',
        'Profile data (username, password, profile picture).',
        'User content (reviews, ratings, messages with other users).',
        'Identity verification information (government-issued ID).',
      ],
    },
    {
      id: 'data-usage',
      heading: '2. How We Use Your Data',
      content: 'Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:',
      items: [
        'Create and manage your account.',
        'Facilitate account creation and logon process.',
        'Process your transactions and send you related information.',
        'Improve the service and ensure platform security.',
        'Communicate with you about your account or our services.',
      ],
    },
    {
      id: 'sharing-disclosure',
      heading: '3. Sharing & Disclosure',
      content: 'We may share information we have collected about you in certain situations. Your information may be disclosed to other users to facilitate a rental transaction, to our third-party service providers who perform services for us, or if required by law.',
    },
    {
      id: 'user-rights',
      heading: '4. Your Rights & Choices',
      content: 'You have rights regarding your personal information, including the right to access, correct, or delete your data. You may review and change the information in your account or terminate your account at any time by logging into your account settings and updating your account.',
    },
  ],
  contact: {
    heading: '5. Contact Us',
    text: 'If you have questions or comments about this Privacy Policy, please contact us at:',
    email: 'privacy@kuthakai.com',
  },
};
