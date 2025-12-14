# Explore Module

The Explore module provides a comprehensive browsing experience for rental items on the Kuthakai marketplace platform. Users can browse featured items, filter by categories, and toggle between grid and map views.

## 📋 Module Overview

This module contains:
- **Category filtering** - Horizontal scrolling category pills
- **Featured items carousel** - Highlighted rental items
- **View toggle** - Switch between grid and map views
- **Item grid** - Responsive 2-column mobile, expanding to 3-4 columns on larger screens
- **Item cards** - Display item details with owner information

## 🗂️ Module Structure

```
/src/modules/explore/
├── components/              # Reusable UI components
│   ├── CategoryPill.tsx
│   ├── FeaturedItemCard.tsx
│   ├── ViewToggle.tsx
│   ├── ItemCard.tsx
│   └── index.ts            # Barrel export
│
├── explore-screen/         # Main explore screen
│   ├── ExploreScreen.tsx
│   └── index.ts
│
├── types.ts                # TypeScript interfaces
├── index.ts                # Main barrel export
└── README.md              # This file
```

## 🎨 Components

### CategoryPill
Pill-shaped category filter buttons with active state.

**Props:**
- `category: Category` - Category object with id and name
- `isActive?: boolean` - Whether this category is currently selected
- `onClick?: (category: Category) => void` - Click handler

**Features:**
- Active state with primary color background
- Hover effects
- Keyboard accessible

### FeaturedItemCard
Large horizontal card for featured items in carousel.

**Props:**
- `item: FeaturedItem` - Featured item data
- `onClick?: (item: FeaturedItem) => void` - Click handler

**Features:**
- 16:9 aspect ratio image
- Minimum width 280px for horizontal scrolling
- Hover opacity effect
- Displays price per day/hour/week

### ViewToggle
Segmented button to toggle between grid and map views.

**Props:**
- `defaultView?: ViewMode` - Initial view mode ('grid' | 'map')
- `onChange?: (view: ViewMode) => void` - View change handler

**Features:**
- Material icons for visual clarity
- Smooth transitions
- Radio button behavior

### ItemCard
Compact card for displaying rental items in grid layout.

**Props:**
- `item: ExploreItem` - Complete item data including owner
- `onClick?: (item: ExploreItem) => void` - Click handler

**Features:**
- Square aspect ratio image
- Owner avatar and name
- Distance indicator
- Price display
- Responsive shadow on hover

## 📄 Screen

### ExploreScreen
Main exploration page with all browsing features.

**Props:**
- `categories: Category[]` - List of filterable categories
- `featuredItems: FeaturedItem[]` - Featured items for carousel
- `items: ExploreItem[]` - All items to display in grid

**Features:**
- Horizontal scrolling categories
- Featured items carousel
- View mode toggle (Grid/Map)
- Responsive grid layout (2 cols mobile, 3-4 cols desktop)
- Map view placeholder
- Category filtering (client-side state)

**Route:** `/explore`

## 🔗 Usage Example

### In App Route
```typescript
// /src/app/explore/page.tsx
import { ExploreScreen } from '@/modules/explore';
import {
  demoExploreCategories,
  demoFeaturedItems,
  demoExploreItems,
} from '@/demo';

export const metadata = {
  title: 'Explore Rentals - Kuthakai',
  description: 'Browse and discover rental items near you',
};

export default function Page() {
  return (
    <ExploreScreen
      categories={demoExploreCategories}
      featuredItems={demoFeaturedItems}
      items={demoExploreItems}
    />
  );
}
```

## 📊 Data Types

See `types.ts` for complete type definitions:

### Category
```typescript
interface Category {
  id: string;
  name: string;
  icon?: string;
}
```

### Owner
```typescript
interface Owner {
  id: string;
  name: string;
  avatar: string;
}
```

### ExploreItem
```typescript
interface ExploreItem {
  id: string;
  title: string;
  price: number;
  priceUnit: string; // 'day', 'hour', 'week'
  distance: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  owner: Owner;
  featured?: boolean;
}
```

### FeaturedItem
```typescript
interface FeaturedItem {
  id: string;
  title: string;
  price: number;
  priceUnit: string;
  imageUrl: string;
  imageAlt: string;
}
```

### ViewMode
```typescript
type ViewMode = 'grid' | 'map';
```

## 🎯 Features

- **Mobile-First Design**: Optimized for mobile with 2-column grid, scales to 3-4 columns on desktop
- **Dark Mode Support**: Full dark mode implementation
- **Horizontal Scrolling**: Smooth category and featured item carousels
- **Responsive Grid**: Adapts from 2 to 4 columns based on screen size
- **View Modes**: Grid and map view toggle (map view placeholder ready for integration)
- **Category Filtering**: Active category state management
- **Owner Information**: Each item shows owner avatar and name
- **Distance Indicator**: Shows proximity to user
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Type-Safe**: Full TypeScript coverage

## 🚀 Future Enhancements

- Actual map view integration with Google Maps or Mapbox
- Real-time filtering by category from API
- Search functionality
- Advanced filters (price range, distance, availability)
- Wishlist/favorite functionality
- Sort options (price, distance, rating)
- Infinite scroll or pagination
- Item preview on hover
- Quick booking from grid view

## 💡 Implementation Notes

### Horizontal Scrolling
The category pills and featured items use CSS classes to hide scrollbars while maintaining smooth scrolling:
```css
[-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
```

### Responsive Grid
The item grid uses Tailwind's responsive grid classes:
- Mobile: `grid-cols-2` (2 columns)
- Tablet: `md:grid-cols-3` (3 columns)
- Desktop: `lg:grid-cols-4` (4 columns)

### Image Aspect Ratios
- Featured items: `aspect-video` (16:9)
- Grid items: `aspect-square` (1:1)
