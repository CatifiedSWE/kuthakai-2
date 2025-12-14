// Dashboard module types

export interface EarningsData {
  currentMonth: number;
  previousMonth: number;
  percentageChange: number;
  chartData: ChartPoint[];
}

export interface ChartPoint {
  value: number;
  label?: string;
}

export interface Booking {
  id: string;
  itemName: string;
  itemImage: string;
  imageAlt: string;
  startDate: string;
  endDate: string;
  status: 'confirmed' | 'pending' | 'completed';
}

export interface Notification {
  id: string;
  type: 'message' | 'payment' | 'booking' | 'alert';
  icon: string;
  title: string;
  description: string;
  timestamp: string;
  isUnread?: boolean;
}

export interface Transaction {
  id: string;
  customerName: string;
  date: string;
  amount: number;
  type: 'rental' | 'refund' | 'deposit';
}

export interface UserDashboard {
  userName: string;
  userAvatar: string;
}

export type EarningsPeriod = 'weekly' | 'monthly' | 'alltime';

export interface WeeklyEarnings {
  week: string;
  amount: number;
  percentage: number;
}

export interface EarningsSummaryData {
  totalEarnings: number;
  weeklyData: WeeklyEarnings[];
  transactions: Transaction[];
}
