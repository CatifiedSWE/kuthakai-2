# Legal Module

This module contains all legal and compliance-related screens and components for the Kuthakai platform.

## 📁 Structure

```
/src/modules/legal/
├── components/              # Reusable UI components
│   ├── AboutHero.tsx       # Hero section for About Us
│   ├── AboutSection.tsx    # Content sections
│   ├── GuaranteeCard.tsx   # Insurance/guarantee option cards
│   ├── TeamMember.tsx      # Team member profile card
│   ├── TeamScroll.tsx      # Horizontal scrolling team section
│   ├── ToggleSwitch.tsx    # Toggle switch component
│   ├── ProhibitedItemCard.tsx  # Prohibited item card
│   ├── RentalSummary.tsx   # Rental agreement summary
│   ├── SignatureCanvas.tsx # Digital signature canvas
│   └── index.ts            # Barrel export
│
├── about-us/                # About Us screen
│   ├── AboutUsScreen.tsx
│   └── index.ts
│
├── insurance-guarantee-screen/  # Insurance & Guarantee screen
│   ├── InsuranceGuaranteeScreen.tsx
│   └── index.ts
│
├── privacy-policy-screen/   # Privacy Policy screen
│   ├── PrivacyPolicyScreen.tsx
│   └── index.ts
│
├── prohibited-items-screen/ # Prohibited Items screen
│   ├── ProhibitedItemsScreen.tsx
│   └── index.ts
│
├── rental-agreement-screen/ # Rental Agreement screen
│   ├── RentalAgreementScreen.tsx
│   └── index.ts
│
├── types.ts                 # TypeScript interfaces
├── index.ts                 # Main barrel export
└── README.md               # This file
```

## 🎯 Screens

### About Us Screen
**Route**: `/about-us`

Displays company information, mission, values, and team members.

**Components used**:
- `AboutHero` - Hero section with company overview
- `AboutSection` - Mission, vision, and values sections
- `TeamScroll` - Horizontal scrolling team member showcase

### Insurance & Guarantee Screen
**Route**: `/insurance-and-guarantee`

Shows available protection options and insurance coverage details.

**Components used**:
- `GuaranteeCard` - Individual protection option cards
- `ToggleSwitch` - Enable/disable coverage options

### Privacy Policy Screen
**Route**: `/privacy-policy`

Displays the platform's privacy policy with sections for data collection, usage, and user rights.

**Components used**:
- Standard text sections with proper formatting

### Prohibited Items Screen
**Route**: `/prohibited-items`

Lists all items prohibited from rental on the platform with detailed descriptions.

**Components used**:
- `ProhibitedItemCard` - Individual prohibited item cards with icons
- Report button for flagging suspicious listings

### Rental Agreement Screen
**Route**: `/rental-agreement` (under listings)

Interactive screen for reviewing and signing rental agreements.

**Components used**:
- `RentalSummary` - Displays rental details (item, owner, renter, dates, cost)
- `SignatureCanvas` - Digital signature pad for agreement signing
- Agreement text scrollable section
- Confirmation checkbox

## 📦 Components

### AboutHero
Hero section with company name, tagline, and overview image.

```tsx
import { AboutHero } from '@/modules/legal';

<AboutHero
  title="About Kuthakai"
  subtitle="Building trust in peer-to-peer rentals"
  imageUrl="..."
/>
```

### GuaranteeCard
Card displaying protection/insurance options.

```tsx
import { GuaranteeCard } from '@/modules/legal';

<GuaranteeCard
  guarantee={{
    id: '1',
    title: 'Damage Protection',
    description: 'Cover accidental damages...',
    icon: 'shield',
    hasToggle: true,
    defaultEnabled: false
  }}
  onToggle={(id, enabled) => console.log(id, enabled)}
/>
```

### TeamMember
Individual team member profile card.

```tsx
import { TeamMember } from '@/modules/legal';

<TeamMember
  member={{
    id: '1',
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: '...'
  }}
/>
```

### ToggleSwitch
Reusable toggle switch component with dark mode support.

```tsx
import { ToggleSwitch } from '@/modules/legal';

<ToggleSwitch
  enabled={true}
  onChange={(enabled) => console.log(enabled)}
  label="Enable feature"
/>
```

### ProhibitedItemCard
Card displaying a prohibited item with icon and description.

```tsx
import { ProhibitedItemCard } from '@/modules/legal';

<ProhibitedItemCard
  item={{
    id: 'weapons',
    title: 'Weapons & Ammunition',
    description: 'Firearms, firearm parts...',
    icon: 'shield'
  }}
/>
```

### RentalSummary
Displays rental agreement summary with item details and cost breakdown.

```tsx
import { RentalSummary } from '@/modules/legal';

<RentalSummary
  summary={{
    itemName: 'GoPro HERO10 Black',
    itemImage: '...',
    owner: 'Jane Doe',
    renter: 'John Smith',
    rentalPeriod: 'Sep 15 - Sep 22, 2024',
    totalCost: '$150.00'
  }}
/>
```

### SignatureCanvas
Interactive canvas for digital signature capture.

```tsx
import { SignatureCanvas } from '@/modules/legal';

<SignatureCanvas
  onSignatureChange={(isEmpty) => console.log('Has signature:', !isEmpty)}
/>
```

## 🔧 Types

### TeamMember
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}
```

### GuaranteeOption
```typescript
interface GuaranteeOption {
  id: string;
  title: string;
  description: string;
  icon: string;
  hasToggle?: boolean;
  defaultEnabled?: boolean;
}
```

### ProhibitedItem
```typescript
interface ProhibitedItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
```

### RentalSummary
```typescript
interface RentalSummary {
  itemName: string;
  itemImage: string;
  owner: string;
  renter: string;
  rentalPeriod: string;
  totalCost: string;
}
```

### RentalAgreementContent
```typescript
interface RentalAgreementContent {
  summary: RentalSummary;
  agreementText: AgreementSection[];
}

interface AgreementSection {
  id: string;
  title: string;
  content: string;
}
```

## 📝 Usage

Import screens and components from the module:

```typescript
// Import screens
import { 
  AboutUsScreen, 
  InsuranceGuaranteeScreen,
  PrivacyPolicyScreen,
  ProhibitedItemsScreen,
  RentalAgreementScreen
} from '@/modules/legal';

// Import components
import { 
  GuaranteeCard, 
  TeamMember,
  ProhibitedItemCard,
  RentalSummary,
  SignatureCanvas
} from '@/modules/legal';

// Import types
import { 
  TeamMember, 
  GuaranteeOption,
  ProhibitedItem,
  RentalAgreementContent
} from '@/modules/legal';
```

## 🎨 Design Principles

1. **Mobile-First**: All components are responsive and optimized for mobile
2. **Dark Mode**: Full dark mode support using Tailwind's dark: prefix
3. **Accessibility**: Proper ARIA labels and semantic HTML
4. **Consistency**: Follows project-wide design patterns and spacing

## 🔄 Demo Data

Demo data is available in `/src/demo/legal.ts` and `/src/demo/team-members.ts`:

```typescript
import { demoTeamMembers } from '@/demo/team-members';
import { 
  demoGuaranteeOptions,
  demoPrivacyPolicyContent,
  demoProhibitedItems,
  demoRentalAgreement
} from '@/demo/legal';
```

## 📍 Routes

The legal module screens are accessible via these routes:

- `/about-us` - About Us page
- `/insurance-and-guarantee` - Insurance & Guarantee page
- `/privacy-policy` - Privacy Policy page
- `/prohibited-items` - Prohibited Items List page
- `/rental-agreement` - Rental Agreement signing page (under listings group)
- `/terms-of-service` - Terms of Service (if implemented)

## 🚀 Adding New Legal Screens

1. Create a new screen folder: `/src/modules/legal/[screen-name]/`
2. Add screen component: `[ScreenName]Screen.tsx`
3. Export via: `index.ts`
4. Update main exports in `/src/modules/legal/index.ts`
5. Create route in `/src/app/(legal)/[route-name]/page.tsx`
6. Add demo data if needed in `/src/demo/legal.ts`
7. Update this README
