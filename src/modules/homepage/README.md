# Homepage Module

This is the main homepage module for the Kuthakai peer-to-peer rental marketplace.

## Structure

```
homepage/
├── components/
│   ├── Header.tsx           # Desktop & Mobile header with navigation
│   ├── MobileNav.tsx        # Bottom navigation for mobile
│   ├── HeroSection.tsx      # Hero banner with CTA buttons
│   ├── SearchBar.tsx        # Search input with glassmorphism
│   ├── CategoryFilter.tsx   # Horizontal scrolling category chips
│   ├── ItemCard.tsx         # Reusable item card component
│   ├── AvailableItems.tsx   # Grid of available rental items
│   ├── TrustSection.tsx     # Trust badges section
│   ├── CommunityStories.tsx # User testimonials
│   └── CTASection.tsx       # Call-to-action banner
└── index.tsx                # Main homepage component

```

## Features

### Responsive Design
- **Mobile**: App-like experience with bottom navigation
- **Desktop**: Premium web application with top navigation

### Components

#### Header
- Desktop: Logo + Center nav (Explore, Community, About) + Location + Hamburger menu
- Mobile: Logo + Location + Profile icon
- Hamburger menu shows Login/Signup for guests, Profile details for logged-in users

#### Mobile Navigation
- Home, Explore, Community, Wishlist, Profile
- Fixed bottom navigation with active state indicators

#### Hero Section
- Responsive headline and description
- Two CTA buttons: "Find Something to Rent" and "List Your Item"
- Desktop shows hero image on the right

#### Search Bar
- Glassmorphism effect
- Material icon for search
- Positioned with negative margin for overlap effect

#### Category Filter
- Horizontal scrolling chips
- Active state with primary color
- Categories: All, Electronics, Outdoor, Tools, Party & Events, Sports Gear, etc.

#### Available Items
- Responsive grid (2 cols mobile, 6 cols desktop)
- Item cards with image, title, distance, price
- Wishlist button on hover
- Map view toggle button

#### Trust Section
- 4 trust badges: ID Verified, Insurance, Secure Payments, 24/7 Support
- Centered layout with icons

#### Community Stories
- User testimonials in card format
- Profile image, name, action, and story
- Responsive grid layout

#### CTA Section
- Full-width banner with primary color
- "Earn money from your unused items" message
- "List an Item Now" button

## Styling

- Uses Tailwind CSS with custom theme
- Primary color: #f86b59
- Background light: #f8f6f5
- Background dark: #221210
- Inter font family
- Material Symbols Outlined icons
- Glassmorphism effects
- Dark mode support

## Usage

```tsx
import Homepage from '@/modules/homepage';

export default function Home() {
  return <Homepage />;
}
```
