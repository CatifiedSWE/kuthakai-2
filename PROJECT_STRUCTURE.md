# Kuthakai Project Structure

## Overview
This is a modular, scalable Next.js application for the Kuthakai peer-to-peer rental marketplace.

## Directory Structure

```
/app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout with fonts and metadata
│   │   ├── page.tsx                  # Homepage entry point
│   │   │
│   │   ├── (auth)/                   # Authentication route group
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   │   ├── forgot-password/
│   │   │   │   └── page.tsx
│   │   │   ├── otp-verification/
│   │   │   │   └── page.tsx
│   │   │   └── reset-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (onboarding)/             # Onboarding route group
│   │   │   ├── welcome/
│   │   │   │   └── page.tsx
│   │   │   ├── find-and-rent/
│   │   │   │   └── page.tsx
│   │   │   └── list-and-earn/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/              # Dashboard route group
│   │   │   ├── overview/
│   │   │   │   └── page.tsx          # kuthakai_dashboard_overview
│   │   │   ├── earnings-summary/
│   │   │   │   └── page.tsx          # kuthakai_earnings_summary_screen
│   │   │   └── rental-marketplace-homepage/
│   │   │       └── page.tsx          # kuthakai_rental_marketplace_homepage
│   │   │
│   │   ├── (community)/              # Community route group
│   │   │   ├── feed/
│   │   │   │   └── page.tsx          # kuthakai_community_feed
│   │   │   ├── reviews/
│   │   │   │   └── page.tsx          # kuthakai_reviews_&_ratings
│   │   │   └── leaderboard/
│   │   │       └── page.tsx          # kuthakai_leaderboard_page
│   │   │
│   │   ├── (listings)/               # Listings route group
│   │   │   ├── list-item/
│   │   │   │   └── page.tsx          # kuthakai_list_your_item_screen
│   │   │   ├── my-listings/
│   │   │   │   └── page.tsx          # kuthakai_my_listings_screen
│   │   │   ├── item-details/
│   │   │   │   └── page.tsx          # kuthakai_item_details_screen
│   │   │   ├── requests-approvals/
│   │   │   │   └── page.tsx          # kuthakai_requests_&_approvals_screen
│   │   │   ├── booking-checkout/
│   │   │   │   └── page.tsx          # kuthakai_booking_&_checkout_screen
│   │   │   ├── rental-agreement/
│   │   │   │   └── page.tsx          # kuthakai_rental_agreement_screen
│   │   │   ├── return-feedback/
│   │   │   │   └── page.tsx          # kuthakai_return_&_feedback_screen
│   │   │   └── damage-claim/
│   │   │       └── page.tsx          # kuthakai_damage_claim_form
│   │   │
│   │   ├── (rentals)/                # Rentals route group
│   │   │   └── my-rentals/
│   │   │       └── page.tsx          # kuthakai_my_rentals_screen
│   │   │
│   │   ├── (explore)/                # Explore route group
│   │   │   └── page.tsx              # kuthakai_explore_page
│   │   │
│   │   ├── (wallet)/                 # Wallet route group
│   │   │   └── transactions/
│   │   │       └── page.tsx          # kuthakai_wallet_&_transactions
│   │   │
│   │   ├── (chat)/                   # Chat route group
│   │   │   └── in-app/
│   │   │       └── page.tsx          # kuthakai_in-app_chat_screen
│   │   │
│   │   ├── (profile)/                # Profile route group
│   │   │   ├── page.tsx              # kuthakai_user_profile_screen (/profile)
│   │   │   └── settings/
│   │   │       └── page.tsx          # kuthakai_settings_screen (/profile/settings)
│   │   │
│   │   ├── (legal)/                  # Legal route group
│   │   │   ├── about-us/
│   │   │   │   └── page.tsx          # kuthakai_about_us_page
│   │   │   ├── privacy-policy/
│   │   │   │   └── page.tsx          # kuthakai_privacy_policy
│   │   │   ├── terms-of-service/
│   │   │   │   └── page.tsx          # kuthakai_terms_of_service
│   │   │   ├── prohibited-items/
│   │   │   │   └── page.tsx          # kuthakai_prohibited_items_list
│   │   │   └── insurance-and-guarantee/
│   │   │       └── page.tsx          # kuthakai_insurance_&_guarantee_page
│   │   │
│   │   ├── (info)/                   # Info route group
│   │   │   └── how-it-works/
│   │   │       └── page.tsx          # kuthakai_how_it_works_screen
│   │   │
│   │   ├── (support)/                # Support route group
│   │   │   ├── contact-support/
│   │   │   │   └── page.tsx          # kuthakai_contact_&_support_page
│   │   │   └── faq-help-center/
│   │   │       └── page.tsx          # kuthakai_faq_&_help_center
│   │   │
│   │   └── (static)/                 # Optional bucket for non-functional pages
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
│   │   ├── auth/                     # Authentication module
│   │   │   ├── README.md
│   │   │   ├── components/
│   │   │   ├── layouts/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── forgot-password/
│   │   │   ├── otp-verification/
│   │   │   └── reset-password/
│   │   │
│   │   ├── onboarding/               # Onboarding module
│   │   │   └── README.md
│   │   │
│   │   ├── dashboard/                # Dashboard module
│   │   │   └── README.md
│   │   │
│   │   ├── community/                # Community module
│   │   │   └── README.md
│   │   │
│   │   ├── listings/                 # Listings module
│   │   │   └── README.md
│   │   │
│   │   ├── rentals/                  # Rentals module
│   │   │   └── README.md
│   │   │
│   │   ├── explore/                  # Explore module
│   │   │   └── README.md
│   │   │
│   │   ├── wallet/                   # Wallet module
│   │   │   └── README.md
│   │   │
│   │   ├── chat/                     # Chat module
│   │   │   └── README.md
│   │   │
│   │   ├── profile/                  # Profile module
│   │   │   └── README.md
│   │   │
│   │   ├── legal/                    # Legal module
│   │   │   └── README.md
│   │   │
│   │   ├── support/                  # Support module
│   │   │   └── README.md
│   │   │
│   │   ├── info/                     # Info module
│   │   │   └── README.md
│   │   │
│   │   ├── common/                   # Common/shared module
│   │   │   └── README.md
│   │   │
│   │   ├── homepage/                 # Homepage module
│   │   │   ├── README.md
│   │   │   ├── index.tsx
│   │   │   └── sections/
│   │   │       ├── hero/
│   │   │       ├── search/
│   │   │       ├── categories/
│   │   │       ├── items/
│   │   │       ├── trust/
│   │   │       ├── stories/
│   │   │       ├── cta/
│   │   │       └── index.ts
│   │   │
│   │   └── layouts/                  # Layout module
│   │       └── navigation/
│   │           ├── desktop/
│   │           │   ├── navbar/
│   │           │   └── footer/
│   │           ├── mobile/
│   │           │   ├── topbar/
│   │           │   └── bottom-nav/
│   │           └── index.ts
│   │
│   └── styles/
│       └── globals.css               # Global styles with Tailwind
│
├── public/
│   └── logo/
│       └── Kuthakai_Logo.png         # Brand logo
│
├── next.config.ts                    # Next.js configuration
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript configuration
└── PROJECT_STRUCTURE.md              # This file
```

## Architecture Principles

### 1. Route Groups
- Route groups (folders with parentheses) organize routes without affecting URL structure
- Examples: `(auth)`, `(dashboard)`, `(community)`
- Allows for better code organization and shared layouts

### 2. Modular Structure
- Each feature is isolated in its own module
- Components are organized by feature, not by type
- Easy to add, remove, or modify features

### 3. No Hardcoded Data
- All data is stored in `src/demo/` directory
- Components import data from demo files
- Easy to replace with API calls later

### 4. Responsive Design
- Desktop and mobile layouts are separated
- Desktop: Navbar + Footer
- Mobile: Topbar + Bottom Navigation
- Responsive breakpoint: `lg` (1024px)

### 5. Section-Based Homepage
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

### Authentication
- Login, Signup, Forgot Password, OTP Verification, Reset Password
- Shared authentication layout
- Form validation and error handling

### Placeholder Routes (Ready for Development)
All route groups include placeholder pages with "Coming Soon" message:
- **Onboarding**: Welcome, Find and Rent, List and Earn
- **Dashboard**: Overview, Earnings Summary, Rental Marketplace Homepage
- **Community**: Feed, Reviews, Leaderboard
- **Listings**: List Item, My Listings, Item Details, Requests & Approvals, Booking & Checkout, Rental Agreement, Return & Feedback, Damage Claim
- **Rentals**: My Rentals
- **Explore**: Explore Page
- **Wallet**: Transactions
- **Chat**: In-App Chat
- **Profile**: User Profile, Settings
- **Legal**: About Us, Privacy Policy, Terms of Service, Prohibited Items, Insurance & Guarantee
- **Info**: How It Works
- **Support**: Contact Support, FAQ & Help Center

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

### Adding a New Route
1. Create folder in `src/app/(route-group)/[route-name]/`
2. Create `page.tsx` component
3. Add to corresponding module in `src/modules/[module-name]/`

### Adding a New Module
1. Create folder in `src/modules/[module-name]/`
2. Add `README.md` file
3. Create feature components
4. Export from `index.ts`
5. Import in route pages

### Adding a New Section to Homepage
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

## Project Status

### ✅ Completed
- Homepage with all sections
- Authentication pages (Login, Signup, Forgot Password, OTP, Reset Password)
- Desktop and mobile navigation
- Responsive design system
- Demo data structure

### 🚧 In Progress
- Feature modules ready for development
- All route placeholders created

### 📋 To Do
- Implement onboarding flow
- Build dashboard and analytics
- Create community features
- Develop listing and rental management
- Add wallet and transaction system
- Implement in-app chat
- Build profile and settings pages
- Create legal and support pages

## Team Collaboration Guidelines

### Folder Allocation
- Each team member can work on a specific route group
- Module folders correspond to route groups for better organization
- Use README.md in each module to document progress and notes

### Development Workflow
1. Pick a feature from a route group
2. Develop components in the corresponding module folder
3. Import and use in the route page
4. Test responsively (desktop and mobile)
5. Update module README.md with progress

### Best Practices
- Keep components small and focused
- Use demo data until backend is ready
- Follow existing naming conventions
- Maintain responsive design patterns
- Document complex logic in README files

## Future Enhancements
- Replace demo data with API calls
- Add state management (Redux/Zustand)
- Implement search functionality
- Add filtering and sorting
- Integrate payment gateway
- Add real-time chat with WebSockets
- Implement booking system with calendar
- Add push notifications
- Implement image upload and optimization
- Add map integration for location-based features
