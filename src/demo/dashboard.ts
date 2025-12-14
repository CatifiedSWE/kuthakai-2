import { 
  EarningsData, 
  Booking, 
  Notification, 
  Transaction, 
  UserDashboard,
  EarningsSummaryData 
} from '@/modules/dashboard/types';

export const demoUserDashboard: UserDashboard = {
  userName: 'Priya',
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhlN5aZceRXLqRyNZB8nhg2FOrwy13jjSQxMa6AQgjEeRDtfci8qjg_zZ_h9qr25NuLmYd6uL_681nE7BrPfybIzjbZ6c6_U9w40-eMNrGM0BY32qNcGyvXD95fMRkjVXJ7vgHJcfJen4V5VEaokpJGa0dYbMDZlRyn5Cqel3vGxnmoD7clH588hFee-K9gn6cnyNSpcRsLxmp5CkbqAC3MEltFZCFY2iyXY_VWuNlT4gyyhlMuYH_yCvnYbgTo6aAJkNTh6p7A6wL',
};

export const demoEarnings: EarningsData = {
  currentMonth: 12500,
  previousMonth: 10850,
  percentageChange: 15.2,
  chartData: [
    { value: 87.2 },
    { value: 16.8 },
    { value: 32.8 },
    { value: 74.4 },
    { value: 26.4 },
    { value: 80.8 },
    { value: 48.8 },
    { value: 36 },
    { value: 96.8 },
    { value: 119.2 },
    { value: 0.8 },
    { value: 64.8 },
    { value: 103.2 },
    { value: 20 },
  ],
};

export const demoBookings: Booking[] = [
  {
    id: 'booking-001',
    itemName: 'Canon EOS R5 Camera',
    itemImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBUTBRtDCGqClgBtu3ZQNBPQaKGIspo0o1mClGyiGWjdIyE-Fj5elM8Gqj9RZmL2WCIb4CAoaAkjS-yH6ix_nY-BNbCN9eY77y9DAO5BrIDOPG0p_NV2LWaObHUF92E3SI46Esk86chrkXIU3AS3pmnlDpqsiNwbgCkTti6QhZvuukMwF54RAPODIK9o0xqo0rxQGwiADOSyqEWp1F4moRIl5ucMtyUTZ2ft2Etu6JF1HqYmVMHZglZhh0GJ47OLIfkZ_NLNwjQ23T',
    imageAlt: 'Canon EOS R5 Camera',
    startDate: 'Jun 25',
    endDate: 'Jun 28',
    status: 'confirmed',
  },
  {
    id: 'booking-002',
    itemName: '4-Person Camping Tent',
    itemImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7w4qe2ZVj2a7efMbF9-MChmovGtqr3I_o3756tfyBv-_xOeE0THninpdO2WPQkvPSD7gD4P9rKCIDTHRjWM5N4VuhJ2PTh0hHfq_gR95gvejW1tg9D7_ktJlLPsR6U6DCKXqr08WYTyG1ylbqnZEUFf79ULBUxnntSa621GJo1wUMv5HVjbuOspqirn62IABQ02AclFU99eY1iMByzrkPhekan2su6mBGE9uYIzbXGZEJ8AvW2AYzgwUNH6fP97KelnFBg8YO098M',
    imageAlt: '4-Person Camping Tent',
    startDate: 'Jul 02',
    endDate: 'Jul 05',
    status: 'confirmed',
  },
];

export const demoNotifications: Notification[] = [
  {
    id: 'notif-001',
    type: 'message',
    icon: 'chat_bubble',
    title: 'New Message from Arjun',
    description: '"Is the tent waterproof?"',
    timestamp: '2h ago',
    isUnread: true,
  },
  {
    id: 'notif-002',
    type: 'payment',
    icon: 'payments',
    title: 'Payment Received',
    description: '₹1,500 from Rina for the camera.',
    timestamp: '1d ago',
    isUnread: false,
  },
  {
    id: 'notif-003',
    type: 'booking',
    icon: 'calendar_add_on',
    title: 'New Booking Request',
    description: 'DJI Mavic Pro Drone',
    timestamp: '3d ago',
    isUnread: false,
  },
];

export const demoTransactions: Transaction[] = [
  {
    id: 'txn-001',
    customerName: 'Priya S.',
    date: '15 Oct 2023',
    amount: 2500,
    type: 'rental',
  },
  {
    id: 'txn-002',
    customerName: 'Arjun K.',
    date: '12 Oct 2023',
    amount: 1800,
    type: 'rental',
  },
  {
    id: 'txn-003',
    customerName: 'Meera V.',
    date: '08 Oct 2023',
    amount: 3200,
    type: 'rental',
  },
  {
    id: 'txn-004',
    customerName: 'Rohan G.',
    date: '05 Oct 2023',
    amount: 1500,
    type: 'rental',
  },
];

export const demoEarningsSummary: EarningsSummaryData = {
  totalEarnings: 125000,
  weeklyData: [
    { week: 'W1', amount: 18000, percentage: 60 },
    { week: 'W2', amount: 10500, percentage: 35 },
    { week: 'W3', amount: 25500, percentage: 85 },
    { week: 'W4', amount: 15000, percentage: 50 },
  ],
  transactions: demoTransactions,
};
