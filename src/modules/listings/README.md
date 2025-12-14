# Listings Module

This module handles all listing and rental-related functionality including item details, booking checkout, damage claims, return & feedback, and rental request approvals.

## 📁 Structure

```
/src/modules/listings/
├── components/                      # Reusable UI components
│   ├── ItemImageCarousel.tsx        # Image gallery with indicators
│   ├── OwnerCard.tsx                # Owner profile display
│   ├── LocationCard.tsx             # Location with map
│   ├── ReviewCard.tsx               # Individual review
│   ├── ReviewsList.tsx              # Reviews section
│   ├── PaymentMethodSelector.tsx    # Payment options
│   ├── PriceDetailsSection.tsx      # Price breakdown
│   ├── RentalSummaryCard.tsx        # Booking summary
│   ├── PhotoGallery.tsx             # Photo upload gallery
│   ├── DamageDescriptionInput.tsx   # Damage report input
│   ├── DamageDetailsDisplay.tsx     # Damage info display
│   ├── SecurePaymentFooter.tsx      # Payment CTA footer
│   ├── RentalItemCard.tsx           # Rental item display
│   ├── PhotoUpload.tsx              # Photo upload component
│   ├── StarRating.tsx               # Interactive star rating
│   ├── RequestCard.tsx              # Rental request card
│   ├── RequestsEmptyState.tsx       # Empty state for requests
│   └── index.ts                     # Barrel export
│
├── item-details-screen/             # Item details page
│   ├── ItemDetailsScreen.tsx
│   └── index.ts
│
├── booking-checkout-screen/         # Checkout flow
│   ├── BookingCheckoutScreen.tsx
│   └── index.ts
│
├── damage-claim-screen/             # Damage reporting
│   ├── DamageClaimScreen.tsx
│   └── index.ts
│
├── my-listings-screen/              # User's listings
│   ├── MyListingsScreen.tsx
│   └── index.ts
│
├── list-item-screen/                # List new item form
│   ├── ListItemScreen.tsx
│   └── index.ts
│
├── return-feedback-screen/          # Return item & feedback
│   ├── ReturnFeedbackScreen.tsx
│   └── index.ts
│
├── requests-approvals-screen/       # Manage rental requests
│   ├── RequestsApprovalsScreen.tsx
│   └── index.ts
│
├── types.ts                         # TypeScript interfaces
├── damage-claim-types.ts            # Damage claim specific types
├── index.ts                         # Main barrel export
└── README.md                       # This file
```

## 🎯 Screens

### Item Details Screen
**Route**: `/item-details`

Displays comprehensive information about a rental item including images, description, owner details, location, and reviews.

**Features**:
- Image carousel with multiple photos
- Item name, description, and daily price
- Owner profile with rating
- Location with map
- User reviews
- "Rent Now" CTA button

**Navigation**:
- Back button → `/explore`
- Share button → Native share or clipboard
- Rent Now button → `/booking-checkout`

### Booking Checkout Screen
**Route**: `/booking-checkout`

Handles the rental booking and payment process.

### Damage Claim Screen
**Route**: `/damage-claim`

Allows users to report damage to rented items.

### My Listings Screen
**Route**: `/my-listings`

Displays all items listed by the current user with their status and management options.

**Features**:
- List of user's items with images and prices
- Status badges (Available, Rented Out, Pending Approval)
- Edit button for each item
- Floating action button to add new items
- Empty state when no items are listed

### List Item Screen
**Route**: `/list-item`

Multi-step form to list a new item for rent.

**Features**:
- Progress indicator (Step 1 of 3)
- Photo upload section
- Item details form (title, category, description)
- Price per day input
- Fixed bottom CTA button
- Close button to exit

## 📦 Components

### ItemImageCarousel
Swipeable image carousel with dot indicators.

```tsx
import { ItemImageCarousel } from '@/modules/listings';

<ItemImageCarousel
  images={[
    { id: '1', url: '...', alt: 'Camera front view' },
    { id: '2', url: '...', alt: 'Camera side view' }
  ]}
  itemName="Canon EOS R5"
/>
```

### OwnerCard
Displays item owner information with rating and review count.

```tsx
import { OwnerCard } from '@/modules/listings';

<OwnerCard
  owner={{
    id: 'user-1',
    name: 'Alex Doe',
    avatar: '...',
    rating: 4.8,
    reviewCount: 15
  }}
  onViewProfile={() => console.log('View profile')}
/>
```

### LocationCard
Shows location with map image and address.

```tsx
import { LocationCard } from '@/modules/listings';

<LocationCard
  location={{
    address: 'Koramangala, Bengaluru',
    city: 'Bengaluru',
    mapImage: '...',
    mapAlt: 'Map showing location'
  }}
/>
```

### ReviewCard
Individual review with user avatar, name, rating, and comment.

```tsx
import { ReviewCard } from '@/modules/listings';

<ReviewCard
  review={{
    id: 'review-1',
    userId: 'user-2',
    userName: 'Jane Smith',
    userAvatar: '...',
    rating: 5,
    comment: 'Great camera!',
    date: '2024-01-15'
  }}
/>
```

### ReviewsList
Reviews section with "See all" link.

```tsx
import { ReviewsList } from '@/modules/listings';

<ReviewsList
  reviews={reviewsArray}
  onSeeAll={() => console.log('See all reviews')}
/>
```

## 🔧 Types

### ItemDetails
```typescript
interface ItemDetails {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  images: ItemImage[];
  owner: ItemOwner;
  location: ItemLocation;
  reviews: ItemReview[];
  category?: string;
}
```

### ItemOwner
```typescript
interface ItemOwner {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
}
```

### ItemReview
```typescript
interface ItemReview {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}
```

### ItemLocation
```typescript
interface ItemLocation {
  address: string;
  city: string;
  mapImage: string;
  mapAlt: string;
}
```

### ItemImage
```typescript
interface ItemImage {
  id: string;
  url: string;
  alt: string;
}
```

## 📝 Usage

```typescript
// Import screens
import { ItemDetailsScreen } from '@/modules/listings';

// Import components
import { ItemImageCarousel, OwnerCard, ReviewsList } from '@/modules/listings';

// Import types
import { ItemDetails, ItemOwner, ItemReview } from '@/modules/listings';
```

## 🔄 Demo Data

Demo data is available in `/src/demo/items.ts`:

```typescript
import { demoItemDetails, demoItems } from '@/demo/items';
```

## 🎨 Design Principles

1. **Mobile-First**: Optimized for mobile with responsive desktop layouts
2. **Dark Mode**: Full dark mode support
3. **Interactive**: Smooth transitions and hover states
4. **Accessibility**: Proper test IDs, ARIA labels, and semantic HTML
5. **Performance**: Optimized images and lazy loading

## 📍 Test IDs

All components include `data-testid` attributes for testing:

- `item-details-app-bar` - Top navigation bar
- `item-image-carousel` - Image carousel container
- `owner-card` - Owner information card
- `location-card` - Location section
- `reviews-list` - Reviews container
- `rent-now-button` - Primary CTA button
