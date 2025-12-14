# Info Module

Handles informational pages like "How It Works".

## Structure

```
info/
├── components/
│   ├── TimelineStep.tsx           # Timeline step component
│   ├── SegmentedControl.tsx       # Segmented control for user types
│   └── index.ts                   # Barrel export
├── how-it-works-screen/
│   ├── HowItWorksScreen.tsx       # How It Works main screen
│   └── index.ts                   # Barrel export
├── types.ts                       # TypeScript interfaces
├── index.ts                       # Main module export
└── README.md                      # This file
```

## Components

### TimelineStep
Displays a single step in the timeline with icon, title, and description.

**Props:**
- `stepNumber: number` - Step number
- `icon: string` - Material icon name
- `title: string` - Step title
- `description: string` - Step description
- `isFirst?: boolean` - Whether this is the first step
- `isLast?: boolean` - Whether this is the last step

**Features:**
- Vertical timeline connector
- Icon display
- Responsive layout

### SegmentedControl
Toggle between different user types (Renters/Owners).

**Props:**
- `options: string[]` - Array of option labels
- `defaultValue?: string` - Default selected value
- `onChange?: (value: string) => void` - Change handler

**Features:**
- Smooth transitions
- Active state styling
- Dark mode support

### HowItWorksScreen
Main screen for "How It Works" functionality.

**Props:**
- `renterSteps: HowItWorksStep[]` - Steps for renters
- `ownerSteps: HowItWorksStep[]` - Steps for owners
- `onBack?: () => void` - Back navigation handler
- `onStartAction?: (userType: string) => void` - CTA handler

**Features:**
- Toggle between renter and owner flows
- Timeline display
- Sticky header and footer
- Mobile-first responsive design

## Usage

```tsx
import { HowItWorksScreen } from '@/modules/info';
import { demoRenterSteps, demoOwnerSteps } from '@/demo/info';

export default function Page() {
  return (
    <HowItWorksScreen
      renterSteps={demoRenterSteps}
      ownerSteps={demoOwnerSteps}
    />
  );
}
```

## Types

```typescript
interface HowItWorksStep {
  id: string;
  icon: string;
  title: string;
  description: string;
}
```

## Interactive Features

- ✅ Segmented control for user type selection
- ✅ Dynamic timeline rendering
- ✅ CTA button actions
- ✅ Back navigation
- ✅ Smooth transitions
- ✅ Mobile-optimized layout
