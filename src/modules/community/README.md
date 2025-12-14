# Community Module

This module handles all community-related features including the community feed, leaderboard, reviews & ratings, and social interactions.

## 📁 Structure

```
/src/modules/community/
├── components/                  # Reusable UI components
│   ├── AnnouncementCard.tsx      # Announcement display
│   ├── FeaturedMember.tsx        # Featured member card
│   ├── FeedDivider.tsx           # Section divider
│   ├── FeedPost.tsx              # Post card
│   ├── FloatingActionButton.tsx  # FAB for new posts
│   ├── ImageCarousel.tsx         # Image carousel for posts
│   ├── PostActions.tsx           # Like, comment, share buttons
│   ├── PostHeader.tsx            # Post author header
│   ├── LeaderboardCard.tsx       # Leaderboard user card
│   ├── FilterButton.tsx          # Filter button component
│   ├── RatingsSummary.tsx        # Overall rating display
│   ├── ReviewCard.tsx            # Individual review card
│   ├── ReviewsTabNavigation.tsx  # Reviews received/given tabs
│   └── index.ts                  # Barrel export
│
├── feed-screen/                 # Community feed
│   ├── FeedScreen.tsx
│   └── index.ts
│
├── leaderboard-screen/          # Top renters leaderboard
│   ├── LeaderboardScreen.tsx
│   └── index.ts
│
├── reviews-screen/              # Reviews & ratings
│   ├── ReviewsScreen.tsx
│   └── index.ts
│
├── types.ts                     # TypeScript interfaces
├── index.ts                     # Main barrel export
└── README.md                   # This file
```

## 🎯 Screens

### Feed Screen
**Route**: `/feed`

Displays the community feed with posts, announcements, and featured members.

### Leaderboard Screen
**Route**: `/leaderboard`

Shows top users ranked by items rented out, with filtering options.

### Reviews Screen
**Route**: `/reviews`

Displays user's overall rating, rating breakdown, and reviews received/given with tab navigation.

**Features**:
- Ranked list of users with profile pictures
- Gold badge for #1 user
- City and College filter buttons
- Highlighted current user position
- Items rented out count for each user

## 📦 Components

### LeaderboardCard
Displays a user's leaderboard entry with rank, name, location, and items rented count.

```tsx
import { LeaderboardCard } from '@/modules/community';

<LeaderboardCard
  user={{
    id: '1',
    rank: 1,
    name: 'Maya',
    location: 'San Francisco, CA',
    itemsRentedOut: 52,
    avatar: '...',
    isCurrentUser: false,
  }}
/>
```

### FilterButton
Filter button with icon and dropdown indicator.

```tsx
import { FilterButton } from '@/modules/community';

<FilterButton
  icon="location_city"
  label="Filter by City"
  onClick={() => console.log('Filter clicked')}
/>
```

## 🔧 Types

### LeaderboardUser
```typescript
interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  location: string;
  itemsRentedOut: number;
  avatar: string;
  isCurrentUser?: boolean;
}
```

## 📝 Usage

```typescript
// Import screens
import { LeaderboardScreen, FeedScreen } from '@/modules/community';

// Import components
import { LeaderboardCard, FilterButton } from '@/modules/community';

// Import types
import { LeaderboardUser, Post } from '@/modules/community';
```

## 🔄 Demo Data

Demo data is available in `/src/demo/leaderboard.ts`:

```typescript
import { demoLeaderboardUsers } from '@/demo';
```

## 🎨 Design Principles

1. **Mobile-First**: Optimized for mobile with responsive layouts
2. **Dark Mode**: Full dark mode support
3. **Gamification**: Visual ranking with special badges
4. **User Engagement**: Highlighted current user position
5. **Accessibility**: Proper test IDs and semantic HTML

## 📍 Test IDs

All components include `data-testid` attributes for testing:

- `leaderboard-screen` - Main leaderboard container
- `leaderboard-card-{rank}` - Individual leaderboard cards
- `current-user-card` - Current user's highlighted card
- `filter-button-{name}` - Filter buttons