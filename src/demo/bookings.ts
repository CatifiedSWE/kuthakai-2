import { BookingData, PaymentOption } from '@/modules/listings';

export const demoBooking: BookingData = {
  item: {
    id: 'camera-001',
    name: 'Canon EOS R5 Camera',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPfINjaLmvkyz1BrGWKfelcz-dljrMXIbF8vId6DBLf_9WSND_f0qQm_4DfUzBvlRpOifMMgV5j3P7JrZlxznlFOhZDEiwvItEz15ZkQbDOXY207y7zAoLOwE3gOiXhcMYkXZwhHu8Q65EmrXEI0mNELn8Xs9IWIX1kxDB74NMYtmsz0BcbqzvD6sIuv8a27Za0kuRo88SmEGJ1EIIpaUrlZsAlhy0cimmi8rLH2HfDNzl7iiWQvxglKlkipcCH32VkntD9rnqbsHd',
    imageAlt: 'Canon EOS R5 camera on a neutral background',
    category: 'Photography',
  },
  dates: {
    startDate: '12 Aug, 2024',
    endDate: '15 Aug, 2024',
    duration: '3 Days',
  },
  pricing: {
    rentalFee: 15000,
    securityDeposit: 5000,
    serviceFee: 500,
    total: 20500,
  },
};

export const demoPaymentOptions: PaymentOption[] = [
  {
    id: 'upi',
    name: 'UPI',
    icon: 'account_balance_wallet',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUjTOyeJvcRylB_7mwmv_XhreWfRF8TT9VM8bKUOrztwmA6d_eFHmL1wKmRMGKxDeGDrT4aDGvZnXK68Jr7igyLOl8iUj9OS6NiiWdNdqEbH5o6skQ4Klza90fVw1wdHHT-FdsRizg1nuHYJl03sKlyOSRIh_Xa7D5qkCDrfPDEPAKC2t4XCJOvyuUiW4nr4kS4rRQjGwOj1LqIyOyGdDvfsSQUYq7DdwMr9EvWHdfzZeuADYaMSKR2KfzGiJB8OOiHjx1mRAdPUKq',
  },
  {
    id: 'card',
    name: 'Credit/Debit Card',
    icon: 'credit_card',
  },
  {
    id: 'netbanking',
    name: 'Net Banking',
    icon: 'account_balance',
  },
];
