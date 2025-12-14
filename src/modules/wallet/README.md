# Wallet Module

This module contains all wallet, transaction, and reward-related screens and components for the Kuthakai platform.

## 📁 Structure

```
/src/modules/wallet/
├── components/              # Reusable UI components
│   ├── BalanceCard.tsx     # Wallet balance display with withdraw button
│   ├── TransactionItem.tsx # Individual transaction row
│   ├── FilterChips.tsx     # Transaction filter chips
│   ├── EmptyState.tsx      # Empty state for no transactions
│   ├── CreditBalanceCard.tsx   # Reward credits balance card
│   ├── ReferralCard.tsx    # Referral bonus card with share functionality
│   ├── RedeemCard.tsx      # Credit redemption card
│   └── index.ts            # Barrel export
│
├── wallet-transaction-screen/  # Wallet & Transaction History screen
│   ├── WalletTransactionScreen.tsx
│   └── index.ts
│
├── reward-center-screen/   # Reward Center screen
│   ├── RewardCenterScreen.tsx
│   └── index.ts
│
├── types.ts                # TypeScript interfaces
├── index.ts                # Main barrel export
└── README.md              # This file
```

## 🎯 Screens

### Wallet Transaction Screen
**Route**: `/transactions`

Displays wallet balance and complete transaction history with filtering options.

**Features**:
- Current wallet balance display
- Withdraw button
- Transaction history with earnings and payments
- Filter by All, Earnings, or Payments
- Empty state when no transactions exist
- Back navigation and help button

**Components used**:
- `BalanceCard` - Wallet balance with withdraw action
- `TransactionItem` - Individual transaction rows
- `FilterChips` - Transaction type filters
- `EmptyState` - No transactions view

### Reward Center Screen
**Route**: `/rewards`

Shows available credits, referral program, and redemption options.

**Features**:
- Available credits display
- Referral bonus information with shareable code
- Credit redemption options
- Link to transaction history

**Components used**:
- `CreditBalanceCard` - Shows available reward credits
- `ReferralCard` - Referral program with share functionality
- `RedeemCard` - Credit redemption call-to-action

## 📦 Components

### BalanceCard
Displays current wallet balance with withdraw button.

```tsx
import { BalanceCard } from '@/modules/wallet';

<BalanceCard
  balance={{
    current: 12500.00,
    currency: '₹'
  }}
  onWithdraw={() => console.log('Withdraw')}
/>
```

### TransactionItem
Individual transaction row showing earning or payment details.

```tsx
import { TransactionItem } from '@/modules/wallet';

<TransactionItem
  transaction={{
    id: '1',
    type: 'earning',
    title: 'Earnings from Drone Rental',
    description: '25 Aug 2024, 02:15 PM',
    amount: 2500.00,
    date: '25 Aug 2024',
    time: '02:15 PM'
  }}
/>
```

### FilterChips
Filterable chips for transaction type selection.

```tsx
import { FilterChips } from '@/modules/wallet';

<FilterChips
  filters={[
    { id: '1', label: 'All', value: 'all' },
    { id: '2', label: 'Earnings', value: 'earnings' },
    { id: '3', label: 'Payments', value: 'payments' }
  ]}
  activeFilter="all"
  onFilterChange={(filter) => console.log(filter)}
/>
```

### EmptyState
Empty state component for when no transactions exist.

```tsx
import { EmptyState } from '@/modules/wallet';

<EmptyState
  title="No Transactions Yet"
  description="Once you start renting or lending, all your transactions will appear here."
/>
```

### CreditBalanceCard
Displays available reward credits.

```tsx
import { CreditBalanceCard } from '@/modules/wallet';

<CreditBalanceCard
  credits={{
    amount: 25.00,
    currency: '$'
  }}
/>
```

### ReferralCard
Referral program card with shareable referral code.

```tsx
import { ReferralCard } from '@/modules/wallet';

<ReferralCard
  referralInfo={{
    code: 'KUTHAKAI25',
    bonusAmount: 25,
    description: 'Invite friends and earn credits when they complete their first rental.'
  }}
  onShareCode={() => console.log('Share')}
/>
```

### RedeemCard
Credit redemption card with call-to-action button.

```tsx
import { RedeemCard } from '@/modules/wallet';

<RedeemCard
  onRedeem={() => console.log('Redeem')}
/>
```

## 🔧 Types

### Transaction
```typescript
interface Transaction {
  id: string;
  type: 'earning' | 'payment';
  title: string;
  description: string;
  amount: number;
  date: string;
  time: string;
}
```

### WalletBalance
```typescript
interface WalletBalance {
  current: number;
  currency: string;
}
```

### RewardCredit
```typescript
interface RewardCredit {
  amount: number;
  currency: string;
}
```

### ReferralInfo
```typescript
interface ReferralInfo {
  code: string;
  bonusAmount: number;
  description: string;
}
```

### TransactionFilter
```typescript
interface TransactionFilter {
  id: string;
  label: string;
  value: 'all' | 'earnings' | 'payments';
}
```

## 📝 Usage

Import screens and components from the module:

```typescript
// Import screens
import { 
  WalletTransactionScreen,
  RewardCenterScreen
} from '@/modules/wallet';

// Import components
import { 
  BalanceCard,
  TransactionItem,
  FilterChips,
  EmptyState,
  CreditBalanceCard,
  ReferralCard,
  RedeemCard
} from '@/modules/wallet';

// Import types
import { 
  Transaction,
  WalletBalance,
  RewardCredit,
  ReferralInfo,
  TransactionFilter
} from '@/modules/wallet';
```

## 🎨 Design Principles

1. **Mobile-First**: All components are responsive and optimized for mobile
2. **Dark Mode**: Full dark mode support using Tailwind's dark: prefix
3. **Accessibility**: Proper ARIA labels and semantic HTML
4. **Consistency**: Follows project-wide design patterns and spacing
5. **Visual Hierarchy**: Clear distinction between earnings (green) and payments (neutral)

## 🔄 Demo Data

Demo data is available in `/src/demo/wallet.ts`:

```typescript
import { 
  demoWalletBalance,
  demoTransactions,
  demoTransactionFilters,
  demoRewardCredits,
  demoReferralInfo
} from '@/demo';
```

## 📍 Routes

The wallet module screens are accessible via these routes:

- `/transactions` - Wallet & Transaction History page
- `/rewards` - Reward Center page

## 🚀 Adding New Features

1. Create new components in `/src/modules/wallet/components/`
2. Add screen folders with screen component and barrel export
3. Update types in `/src/modules/wallet/types.ts`
4. Add demo data in `/src/demo/wallet.ts`
5. Update main exports in `/src/modules/wallet/index.ts`
6. Create route in `/src/app/(wallet)/[route-name]/page.tsx`
7. Update this README
