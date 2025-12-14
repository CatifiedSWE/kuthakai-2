# Listings Module

Handles rental booking and checkout functionality.

## Structure

```
listings/
├── components/
│   ├── RentalSummaryCard.tsx       # Displays rental item summary
│   ├── PriceDetailsSection.tsx     # Shows price breakdown
│   ├── PaymentMethodSelector.tsx   # Payment method selection UI
│   ├── SecurePaymentFooter.tsx     # Fixed bottom CTA with security message
│   └── index.ts                    # Barrel export
├── booking-checkout-screen/
│   ├── BookingCheckoutScreen.tsx   # Main checkout screen
│   └── index.ts                    # Barrel export
├── types.ts                        # TypeScript interfaces
├── index.ts                        # Main module export
└── README.md                       # This file
```

## Components

### RentalSummaryCard
Displays rental item with image, name, and booking dates.

**Props:**
- `item: RentalItem` - Item details
- `dates: BookingDates` - Booking date information

### PriceDetailsSection
Shows detailed price breakdown with rental fee, deposit, service fee, and total.

**Props:**
- `pricing: PriceBreakdown` - Price details

### PaymentMethodSelector
Interactive payment method selection with radio buttons.

**Props:**
- `options: PaymentOption[]` - Available payment methods
- `selectedMethod: PaymentMethod` - Currently selected method
- `onSelect: (method) => void` - Selection handler

**Features:**
- Visual feedback for selected state
- Hover effects
- Smooth transitions

### SecurePaymentFooter
Fixed bottom bar with security message and payment confirmation button.

**Props:**
- `totalAmount: number` - Total payment amount
- `onConfirmPayment: () => void` - Payment handler
- `isProcessing?: boolean` - Loading state

**Features:**
- Loading spinner during processing
- Disabled state management
- Active scale animation

### BookingCheckoutScreen
Main screen composing all checkout components.

**Props:**
- `bookingData: BookingData` - Complete booking information
- `paymentOptions: PaymentOption[]` - Available payment methods
- `onBack?: () => void` - Back navigation handler

**Features:**
- Payment method state management
- Payment processing simulation
- Success toast notification
- Smooth animations
- Mobile-first responsive design

## Usage

```tsx
import { BookingCheckoutScreen } from '@/modules/listings';
import { demoBooking, demoPaymentOptions } from '@/demo';

export default function Page() {
  return (
    <BookingCheckoutScreen
      bookingData={demoBooking}
      paymentOptions={demoPaymentOptions}
    />
  );
}
```

## Types

```typescript
interface BookingData {
  item: RentalItem;
  dates: BookingDates;
  pricing: PriceBreakdown;
}

type PaymentMethod = 'upi' | 'card' | 'netbanking';
```

## Interactive Features

- ✅ Payment method selection with visual feedback
- ✅ Payment processing with loading state
- ✅ Success notification toast
- ✅ Smooth animations and transitions
- ✅ Hover effects on interactive elements
- ✅ Mobile-optimized touch targets
