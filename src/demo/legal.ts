import { GuaranteeOption } from '@/modules/legal';

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
