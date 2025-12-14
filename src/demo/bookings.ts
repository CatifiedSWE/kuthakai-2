import { BookingData, PaymentOption, DamageClaimData } from '@/modules/listings';

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

export const demoDamageClaim: DamageClaimData = {
  rentalInfo: {
    itemName: 'Vintage Leather Jacket',
    renterName: 'Alex Doe',
    rentalDates: 'Oct 24, 2023 - Oct 28, 2023',
  },
  description: '',
  photos: [
    {
      id: 'photo-1',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8r0uYtlbmXhcI4vGgyobV_q4JZpQ6LARhEGU5sJoG0e9Z_PXTv2jYZHYsg0hZaCs2spO5Fo5eIKMYZSJKhE_P-98EDYt_IBsRqfaNMMgNHcyP6JGc-KNCyVMn0TrADdeY-L5KmLCocfJvv4S7YmCfC1ySW4wODK4488zF8RzTkIjcepQ2QAlY8BYHLIBU-BJjikTW9hDGWQQ5AJD_TuByGFgcMysJX8_f08SK9RZVmihSXiEbA-1MCsmyaiVGVxmzEPG3n5w04WUU',
      alt: 'Close-up of a tear on a leather jacket sleeve',
    },
    {
      id: 'photo-2',
      url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI3Gl94W5g54UwupmMpGnHQk3nVHJzC4qdYu3t66WpM-7IPnD47PLR-v_kUd6M5ReKK8dEn8lZqsARghcGtiV3q1Xgm4gM8yWvvsiS7nQ2Ukx05KV3uEXvhE7qAhaL4QGFHOPjdj6bmTuDmkUGOOVolWaGOq9NWH50PHfreK0l_SSKTXelsLi_s4HWwlll3i9RIw2DhmAFCdKjTHhu9MUX1iuqDR43LwmcXbz8QSaqC_yg5wrv3zRmnZMzV6PiLQrZj6th1TCYxOfM',
      alt: 'A broken zipper on a dark leather jacket',
    },
  ],
};
