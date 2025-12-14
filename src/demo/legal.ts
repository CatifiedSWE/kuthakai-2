import { GuaranteeOption, PrivacyPolicyContent, ProhibitedItem, RentalAgreementContent } from '@/modules/legal';

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

export const demoProhibitedItems: ProhibitedItem[] = [
  {
    id: 'illegal-items',
    title: 'Illegal Items & Regulated Goods',
    description: 'Includes any item that is illegal to own or trade in your jurisdiction.',
    icon: 'gavel',
  },
  {
    id: 'weapons',
    title: 'Weapons, Ammunition & Explosives',
    description: 'Firearms, firearm parts, ammunition, explosives, and certain types of knives.',
    icon: 'shield',
  },
  {
    id: 'hazardous',
    title: 'Hazardous Materials',
    description: 'Includes flammable, explosive, corrosive, or poisonous materials.',
    icon: 'science',
  },
  {
    id: 'adult-content',
    title: 'Adult Content & Obscene Material',
    description: 'Pornographic materials and items that are obscene or sexually suggestive.',
    icon: 'no_adult_content',
  },
  {
    id: 'counterfeit',
    title: 'Counterfeit or Unauthorized Goods',
    description: 'Items that infringe on copyright or trademarks, such as replicas or fakes.',
    icon: 'copyright',
  },
  {
    id: 'live-animals',
    title: 'Live Animals',
    description: 'The rental of live animals is strictly prohibited for safety and welfare reasons.',
    icon: 'pets',
  },
  {
    id: 'recalled',
    title: 'Recalled Items',
    description: 'Any item that has been officially recalled by a manufacturer or government agency.',
    icon: 'dangerous',
  },
];

export const demoRentalAgreement: RentalAgreementContent = {
  summary: {
    itemName: 'GoPro HERO10 Black',
    itemImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsS0fY6V7TT0eiemt6NYetskwSVNxyl48mOixSj6o6aB2ZUK2dpaF7ZlTjFFAmv6-eHvSOKA8acxZ4TqgJ2eQOnZHbLM933a0PC1Qwk-AGuQq6rk5ehQghciFmxjExc4be_5kWelB7SOysZzZoSZUD3QJpVHxOXxWSQvLGOl74tR7eD2HjIUyS8g-3tGKwdr4lHCW58HoM6aQY4ghsY3Tuap67wc78TkRJmzJ9p59L1YWVQiUVd1Qh9pZERJMkIIEJU4cWZX7M-vcd',
    owner: 'Jane Doe',
    renter: 'John Smith',
    rentalPeriod: 'Sep 15 - Sep 22, 2024',
    totalCost: '$150.00',
  },
  agreementText: [
    {
      id: 'introduction',
      title: 'Introduction/Parties Involved',
      content: "This Rental Agreement ('Agreement') is made between Jane Doe ('Owner') and John Smith ('Renter').",
    },
    {
      id: 'terms',
      title: 'Terms of Use',
      content: 'The Renter agrees to use the equipment in a careful and proper manner and will comply with all applicable laws and regulations.',
    },
    {
      id: 'payment',
      title: 'Payment and Fees',
      content: 'The Renter agrees to pay the total rental fee of $150.00 upon signing this agreement.',
    },
    {
      id: 'responsibilities',
      title: 'Responsibilities of Renter/Owner',
      content: 'The Owner confirms the item is in good working condition. The Renter is responsible for returning the item in the same condition.',
    },
    {
      id: 'liability',
      title: 'Liability and Damages Clause',
      content: 'The Renter is liable for any damage, loss, or theft of the equipment during the rental period.',
    },
    {
      id: 'cancellation',
      title: 'Cancellation Policy',
      content: 'Cancellations made within 48 hours of the rental start date are non-refundable.',
    },
  ],
};

