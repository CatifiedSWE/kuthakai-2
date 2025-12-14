# Support Module

Handles customer support and contact functionality.

## Structure

```
support/
├── components/
│   ├── SupportOptionCard.tsx       # Reusable support option card
│   ├── EmergencyCard.tsx          # Emergency support CTA
│   ├── BottomNavigation.tsx       # Bottom nav bar
│   └── index.ts                   # Barrel export
├── contact-support-screen/
│   ├── ContactSupportScreen.tsx   # Main support screen
│   └── index.ts                   # Barrel export
├── types.ts                       # TypeScript interfaces
├── index.ts                       # Main module export
└── README.md                      # This file
```

## Components

### SupportOptionCard
Reusable card for displaying support options (Live Chat, Email, etc.).

**Props:**
- `option: SupportOption` - Support option details
- `onClick?: () => void` - Click handler

**Features:**
- Hover effects
- Active scale animation
- Icon support
- Responsive layout

### EmergencyCard
Highlighted card for emergency support with call-to-action.

**Props:**
- `emergency: EmergencySupport` - Emergency contact details

**Features:**
- Call confirmation toast
- Phone number display
- Prominent CTA button
- Background color distinction

### BottomNavigation
Bottom navigation bar with 5 navigation items.

**Props:**
- `onNavigate?: (id: string) => void` - Navigation handler

**Features:**
- Active state highlighting
- Icon fill states
- Smooth transitions
- 5 nav items: Explore, Wishlists, Trips, Inbox, Profile

### ContactSupportScreen
Main screen composing all support components.

**Props:**
- `supportOptions: SupportOption[]` - List of support options
- `emergencySupport: EmergencySupport` - Emergency contact info
- `onBack?: () => void` - Back navigation handler

**Features:**
- Notification toasts on interaction
- Support option click handling
- Navigation integration
- Mobile-first responsive design

## Usage

```tsx
import { ContactSupportScreen } from '@/modules/support';
import { demoSupportOptions, demoEmergencySupport } from '@/demo';

export default function Page() {
  return (
    <ContactSupportScreen
      supportOptions={demoSupportOptions}
      emergencySupport={demoEmergencySupport}
    />
  );
}
```

## Types

```typescript
interface SupportOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface EmergencySupport {
  title: string;
  description: string;
  phoneNumber: string;
}
```

## Interactive Features

- ✅ Support option click handlers
- ✅ Navigation functionality
- ✅ Emergency call action with confirmation
- ✅ Toast notifications on interactions
- ✅ Smooth animations and transitions
- ✅ Hover effects on all interactive elements
- ✅ Mobile-optimized navigation
