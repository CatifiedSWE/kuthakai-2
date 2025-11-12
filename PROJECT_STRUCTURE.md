# Kuthakai Project Structure

## Overview
This is a modular, scalable Next.js application for the Kuthakai peer-to-peer rental marketplace.

## Directory Structure

```
D:\Kuthakai\
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with fonts and metadata
│   │   └── page.tsx                  # Homepage entry point
│   │
│   ├── demo/                         # Demo data (no hardcoded data in components)
│   │   ├── items.ts                  # Rental items data
│   │   ├── categories.ts             # Category data
│   │   ├── stories.ts                # Community stories/testimonials
│   │   ├── trust-features.ts         # Trust section features
│   │   ├── navigation.ts             # Navigation menu items
│   │   ├── locations.ts              # Indian locations data
│   │   └── index.ts                  # Barrel export
│   │
│   ├── modules/                      # Feature modules
│   │   ├── layouts/
│   │   │   └── navigation/
│   │   │       ├── desktop/
│   │   │       │   ├── navbar/
│   │   │       │   │   ├── DesktopNavbar.tsx
│   │   │       │   │   └── index.ts
│   │   │       │   ├── footer/
│   │   │       │   │   ├── DesktopFooter.tsx
│   │   │       │   │   └── index.ts
│   │   │       │   └── index.ts
│   │   │       ├── mobile/
│   │   │       │   ├── topbar/
│   │   │       │   │   ├── MobileTopbar.tsx
│   │   │       │   │   └── index.ts
│   │   │       │   ├── bottom-nav/
│   │   │       │   │   ├── MobileBottomNav.tsx
│   │   │       │   │   └── index.ts
│   │   │       │   └── index.ts
│   │   │       └── index.ts
│   │   │
│   │   └── homepage/
│   │       ├── sections/
│   │       │   ├── hero/
│   │       │   │   ├── HeroSection.tsx
│   │       │   │   └── index.ts
│   │       │   ├── search/
│   │       │   │   ├── SearchBar.tsx
│   │       │   │   └── index.ts
│   │       │   ├── categories/
│   │       │   │   ├── CategoryFilter.tsx
│   │       │   │   └── index.ts
│   │       │   ├── items/
│   │       │   │   ├── components/
│   │       │   │   │   └── ItemCard.tsx
│   │       │   │   ├── AvailableItems.tsx
│   │       │   │   └── index.ts
│   │       │   ├── trust/
│   │       │   │   ├── TrustSection.tsx
│   │       │   │   └── index.ts
│   │       │   ├── stories/
│   │       │   │   ├── components/
│   │       │   │   │   └── StoryCard.tsx
│   │       │   │   ├── CommunityStories.tsx
│   │       │   │   └── index.ts
│   │       │   ├── cta/
│   │       │   │   ├── CTASection.tsx
│   │       │   │   └── index.ts
│   │       │   └── index.ts
│   │       ├── index.tsx              # Homepage main component
│   │       └── README.md
│   │
│   └── styles/
│       └── globals.css                # Global styles with Tailwind
│
├── public/
│   └── logo/
│       └── Kuthakai_Logo.png          # Brand logo
│
├── next.config.ts                     # Next.js configuration
├── package.json                       # Dependencies
└── tsconfig.json                      # TypeScript configuration
```

## Architecture Principles

### 1. Modular Structure
- Each feature is isolated in its own module
- Components are organized by feature, not by type
- Easy to add, remove, or modify features

### 2. No Hardcoded Data
- All data is stored in `src/demo/` directory
- Components import data from demo files
- Easy to replace with API calls later

### 3. Responsive Design
- Desktop and mobile layouts are separated
- Desktop: Navbar + Footer
- Mobile: Topbar + Bottom Navigation
- Responsive breakpoint: `lg` (1024px)

### 4. Section-Based Homepage
- Each homepage section is isolated
- Sections have their own components folder if needed
- Easy to reorder or remove sections

## Key Features

### Navigation
- **Desktop Navbar**: Logo, center nav (Explore, Community, About), location, hamburger menu
- **Desktop Footer**: 5-column footer with links, social media, copyright
- **Mobile Topbar**: Logo, location, profile icon
- **Mobile Bottom Nav**: Home, Explore, Community, Wishlist, Profile

### Homepage Sections
1. **Hero**: Main headline with CTA buttons
2. **Search**: Glassmorphism search bar
3. **Categories**: Horizontal scrolling category filter
4. **Items**: Grid of available rental items
5. **Trust**: Trust badges (ID Verified, Insurance, Secure Payments, 24/7 Support)
6. **Stories**: Community testimonials
7. **CTA**: Call-to-action banner for lenders

## Styling

- **Framework**: Tailwind CSS v4
- **Font**: Inter (Google Fonts)
- **Icons**: Material Symbols Outlined
- **Primary Color**: #f86b59
- **Background Light**: #f8f6f5
- **Background Dark**: #221210
- **Dark Mode**: Supported via `dark:` classes

## Data Structure

### Demo Data Types
- `Item`: Rental items with id, title, distance, price, image, category, owner
- `Category`: Categories with id, name, icon
- `Story`: User testimonials with id, name, action, image, story
- `TrustFeature`: Trust badges with id, icon, title, description
- `NavItem`: Navigation items with id, label, href, icon
- `Location`: Indian locations with id, name, state, country

## Usage

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
npm start
```

### Adding a New Section
1. Create folder in `src/modules/homepage/sections/[section-name]/`
2. Create `[SectionName].tsx` component
3. Create `index.ts` for exports
4. Add to `src/modules/homepage/sections/index.ts`
5. Import and use in `src/modules/homepage/index.tsx`

### Adding Demo Data
1. Create new file in `src/demo/[data-name].ts`
2. Define TypeScript interface
3. Export data array
4. Add to `src/demo/index.ts`
5. Import in components using `import { demoData } from '@/demo'`

## Future Enhancements
- Replace demo data with API calls
- Add authentication system
- Implement search functionality
- Add filtering and sorting
- Integrate payment gateway
- Add real-time chat
- Implement booking system
