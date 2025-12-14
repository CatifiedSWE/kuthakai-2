# Dashboard Module

The Dashboard module provides a comprehensive overview of user earnings, bookings, and notifications for the Kuthakai rental marketplace platform.

## 📋 Module Overview

This module contains two main screens:
1. **Overview Screen** - Dashboard homepage with earnings chart, upcoming bookings, and recent notifications
2. **Earnings Summary Screen** - Detailed earnings breakdown with charts and transaction history

## 🗂️ Module Structure

```
/src/modules/dashboard/
├── components/              # Reusable UI components
│   ├── DashboardAppBar.tsx
│   ├── EarningsChart.tsx
│   ├── BookingCard.tsx
│   ├── NotificationCard.tsx
│   ├── SegmentedButton.tsx
│   ├── BarChart.tsx
│   ├── TransactionItem.tsx
│   ├── FloatingActionButton.tsx
│   └── index.ts            # Barrel export
│
├── overview-screen/        # Dashboard overview screen
│   ├── OverviewScreen.tsx
│   └── index.ts
│
├── earnings-summary-screen/ # Earnings summary screen
│   ├── EarningsSummaryScreen.tsx
│   └── index.ts
│
├── types.ts                # TypeScript interfaces
├── index.ts                # Main barrel export
└── README.md              # This file
```

## 🎨 Components

### DashboardAppBar
Top navigation bar with user avatar, greeting, and search button. Supports back button mode for sub-pages.

**Props:**
- `userName: string` - User's name for greeting
- `userAvatar: string` - URL to user's avatar image
- `showBackButton?: boolean` - Show back button instead of avatar
- `title?: string` - Title when in back button mode

### EarningsChart
Displays current month's earnings with comparison to previous month and trend chart.

**Props:**
- `data: EarningsData` - Earnings data including current/previous month and chart points

### BookingCard
Card component showing booking details with status indicator.

**Props:**
- `booking: Booking` - Booking information
- `onClick?: (booking: Booking) => void` - Click handler

### NotificationCard
Card component for displaying notifications with icon, title, description, and timestamp.

**Props:**
- `notification: Notification` - Notification data
- `onClick?: (notification: Notification) => void` - Click handler

### SegmentedButton
Toggle button group for switching between time periods (Weekly/Monthly/All Time).

**Props:**
- `options: { label: string; value: EarningsPeriod }[]` - Available options
- `defaultValue?: EarningsPeriod` - Initial selected value
- `onChange?: (value: EarningsPeriod) => void` - Change handler

### BarChart
Bar chart visualization for weekly earnings data.

**Props:**
- `data: WeeklyEarnings[]` - Array of weekly earnings data

### TransactionItem
List item showing transaction details (customer, date, amount).

**Props:**
- `transaction: Transaction` - Transaction data

### FloatingActionButton
Floating action button for quick actions (e.g., add new listing).

**Props:**
- `onClick?: () => void` - Click handler
- `icon?: string` - Material icon name
- `ariaLabel?: string` - Accessibility label

## 📄 Screens

### OverviewScreen
Main dashboard page showing:
- Monthly earnings with trend chart
- Upcoming bookings list
- Recent notifications
- Floating action button for adding new items

**Props:**
- `user: UserDashboard` - User information
- `earnings: EarningsData` - Earnings data
- `bookings: Booking[]` - List of upcoming bookings
- `notifications: Notification[]` - List of recent notifications

**Route:** `/overview` (in dashboard route group)

### EarningsSummaryScreen
Detailed earnings page showing:
- Total earnings headline
- Period selector (Weekly/Monthly/All Time)
- Bar chart visualization
- Transaction history list

**Props:**
- `data: EarningsSummaryData` - Complete earnings summary data

**Route:** `/earnings-summary` (in dashboard route group)

## 🔗 Usage Example

### In App Route (Overview)
```typescript
// /src/app/(dashboard)/overview/page.tsx
import { OverviewScreen } from '@/modules/dashboard';
import {
  demoUserDashboard,
  demoEarnings,
  demoBookings,
  demoNotifications,
} from '@/demo';

export default function Page() {
  return (
    <OverviewScreen
      user={demoUserDashboard}
      earnings={demoEarnings}
      bookings={demoBookings}
      notifications={demoNotifications}
    />
  );
}
```

### In App Route (Earnings Summary)
```typescript
// /src/app/(dashboard)/earnings-summary/page.tsx
import { EarningsSummaryScreen } from '@/modules/dashboard';
import { demoEarningsSummary } from '@/demo';

export default function Page() {
  return <EarningsSummaryScreen data={demoEarningsSummary} />;
}
```

## 📊 Data Types

See `types.ts` for complete type definitions:
- `EarningsData` - Monthly earnings with chart data
- `Booking` - Booking information
- `Notification` - Notification data
- `Transaction` - Transaction details
- `UserDashboard` - User profile for dashboard
- `EarningsSummaryData` - Complete earnings summary
- `EarningsPeriod` - Time period type ('weekly' | 'monthly' | 'alltime')

## 🎯 Features

- **Mobile-First Design**: Optimized for mobile devices, scales up for desktop
- **Dark Mode Support**: Full dark mode implementation
- **Interactive Charts**: SVG-based earnings charts and bar visualizations
- **Status Indicators**: Visual status dots for bookings
- **Unread Badges**: Blue dot indicator for unread notifications
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Type-Safe**: Full TypeScript coverage

## 🚀 Future Enhancements

- Real-time earnings updates
- Export transaction history
- Advanced filtering options
- Earnings analytics and insights
- Push notifications for important updates
- Customizable dashboard widgets
