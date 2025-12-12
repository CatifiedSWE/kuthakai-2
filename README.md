# Kuthakai - Peer-to-Peer Rental Marketplace

A modern, modular Next.js application for peer-to-peer rentals built with TypeScript, Tailwind CSS, and a mobile-first design approach.

## 📋 Project Overview

Kuthakai is a scalable rental marketplace platform where users can list items for rent and browse available rentals. The project follows a clean architecture pattern that separates business logic (modules), data (demo), and routing (app) into distinct layers.

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React 19

## 🗂️ Folder Structure

```
/app/
├── src/
│   ├── app/                    # App Router - Routes only
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── (auth)/             # Authentication routes
│   │   ├── (profile)/          # Profile routes
│   │   ├── (dashboard)/        # Dashboard routes
│   │   └── ...                 # Other route groups
│   │
│   ├── modules/                # Feature modules - Business logic
│   │   ├── auth/               # Authentication module
│   │   ├── profile/            # Profile module
│   │   ├── homepage/           # Homepage module
│   │   ├── common/             # Shared components
│   │   └── ...                 # Other feature modules
│   │
│   ├── demo/                   # Mock data for development
│   │   ├── items.ts
│   │   ├── profile.ts
│   │   ├── categories.ts
│   │   └── index.ts            # Barrel export
│   │
│   └── styles/
│       └── globals.css         # Global styles
│
├── public/                     # Static assets
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🔗 How Folders Are Related

### **Module → Demo → App Flow**

```
┌─────────────────┐
│  1. MODULES     │  ← Contains all components, logic, types
│  /src/modules/  │  ← Self-contained feature folders
└────────┬────────┘
         │
         │ imports
         ↓
┌─────────────────┐
│  2. DEMO DATA   │  ← Mock data for development
│  /src/demo/     │  ← Used by modules for testing
└────────┬────────┘
         │
         │ both imported by
         ↓
┌─────────────────┐
│  3. APP ROUTES  │  ← Only page.tsx files
│  /src/app/      │  ← Orchestrates modules
└─────────────────┘
```

### **Detailed Relationships:**

1. **Modules (`/src/modules/`)**: 
   - Contains all business logic, components, utilities, and types
   - Each module is self-contained (e.g., `auth`, `profile`, `dashboard`)
   - Exports components via barrel exports (`index.ts`)
   - **Never imports from `/app/`**

2. **Demo Data (`/src/demo/`)**:
   - Provides mock data for development and testing
   - Imported by modules to populate components
   - Easy to replace with real API calls later
   - Centralized data management

3. **App Routes (`/src/app/`)**:
   - Contains **only** routing logic (page.tsx files)
   - Imports and composes modules
   - Handles metadata (SEO)
   - Minimal logic - just orchestration

## 📝 Module Structure Pattern

Each module follows this hierarchy:

```
/src/modules/[feature-name]/
├── components/              # Reusable UI components
│   ├── Component1.tsx
│   ├── Component2.tsx
│   └── index.ts            # Barrel export
│
├── [feature-screen]/       # Screen/page-specific logic
│   ├── FeatureScreen.tsx   # Main component
│   ├── FeatureSection.tsx  # Sections
│   └── index.ts            # Barrel export
│
├── types.ts                # TypeScript interfaces
├── utils.ts                # Utility functions (optional)
└── index.ts                # Main barrel export
```

### **Example: Profile Module**

```typescript
// 1. Create components in module
// /src/modules/profile/components/ItemCard.tsx
export default function ItemCard({ item }) { ... }

// 2. Export via barrel
// /src/modules/profile/components/index.ts
export { default as ItemCard } from './ItemCard';

// 3. Create main screen
// /src/modules/profile/profile-screen/ProfileScreen.tsx
import { ItemCard } from '../components';
export default function ProfileScreen() { ... }

// 4. Export from module root
// /src/modules/profile/index.ts
export * from './components';
export * from './profile-screen';

// 5. Use in app route
// /src/app/(profile)/index/page.tsx
import { ProfileScreen } from '@/modules/profile';
import { demoUser } from '@/demo';
export default function Page() {
  return <ProfileScreen user={demoUser} />;
}
```

## 🎯 Creating New Features

### **Step 1: Create Module Structure**

```bash
/src/modules/[feature-name]/
├── components/
│   ├── [Component].tsx
│   └── index.ts
├── [feature-screen]/
│   ├── [Feature]Screen.tsx
│   └── index.ts
├── types.ts
└── index.ts
```

### **Step 2: Add Demo Data (if needed)**

```typescript
// /src/demo/[feature-data].ts
export const demo[FeatureName]: FeatureType[] = [ ... ];

// Add to /src/demo/index.ts
export * from './[feature-data]';
```

### **Step 3: Create Route Page**

```typescript
// /src/app/(route-group)/[route-name]/page.tsx
import { FeatureScreen } from '@/modules/[feature-name]';
import { demoData } from '@/demo';

export const metadata = { title: '...', description: '...' };

export default function Page() {
  return <FeatureScreen data={demoData} />;
}
```

## 🎨 Design Principles

1. **Mobile-First**: All components start with mobile layout, scale up to desktop
2. **Dark Mode**: Full support via Tailwind's `dark:` prefix
3. **Modular**: Features are self-contained and reusable
4. **Type-Safe**: Full TypeScript coverage
5. **Barrel Exports**: Every folder with multiple files uses `index.ts` for clean imports

## 🚀 Getting Started

```bash
# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📦 Project Conventions

### **Import Paths**
- Modules: `import { Component } from '@/modules/[module-name]'`
- Demo data: `import { demoData } from '@/demo'`
- Types: Import from module's types file

### **Component Naming**
- Components: PascalCase (e.g., `ProfileScreen.tsx`)
- Files: Match component name
- Folders: kebab-case (e.g., `profile-screen/`)

### **Barrel Exports**
Every folder with multiple exports should have an `index.ts`:
```typescript
export { default as Component1 } from './Component1';
export { default as Component2 } from './Component2';
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Project Structure Details](./PROJECT_STRUCTURE.md) - For comprehensive documentation
