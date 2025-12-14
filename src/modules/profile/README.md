# Profile Module

This module handles user profile functionality including profile display, KYC verification, and profile settings.

## 📁 Structure

```
/src/modules/profile/
├── components/                      # Reusable UI components
│   ├── ProfileAppBar.tsx            # Profile navigation bar
│   ├── FloatingActionButton.tsx     # FAB for actions
│   ├── KYCProgressBar.tsx           # Verification progress
│   ├── DocumentUploadCard.tsx       # Document upload UI
│   ├── KYCSection.tsx               # KYC section wrapper
│   └── index.ts                     # Barrel export
│
├── profile-screen/                  # Main profile page
│   ├── ProfileScreen.tsx
│   ├── ProfileHeader.tsx
│   ├── ProfileContent.tsx
│   └── index.ts
│
├── kyc-verification-screen/         # KYC verification flow
│   ├── KYCVerificationScreen.tsx
│   └── index.ts
│
├── types.ts                         # TypeScript interfaces
├── index.ts                         # Main barrel export
└── README.md                       # This file
```

## 🎯 Screens

### Profile Screen
**Route**: `/profile`

Displays user profile information and listed/rented items.

**Features**:
- User avatar and basic info
- Verification badge
- Listed items and rented items tabs
- Settings navigation
- Edit profile action

### KYC Verification Screen
**Route**: `/kyc-verification`

Handles identity verification process with document uploads.

**Features**:
- Step-by-step progress indicator
- Aadhaar card upload (front & back)
- PAN card upload
- Live selfie capture
- Document status tracking (pending, uploaded, verified)
- Form validation before submission

**Navigation**:
- Back button → `/profile/settings`
- Submit button → `/profile` (after verification)

**States**:
- **Pending**: Document not yet uploaded (gray card with upload icon)
- **Uploaded**: Document uploaded successfully (green card with thumbnail)
- **Verified**: Document verified by system
- **Rejected**: Document rejected (requires re-upload)

## 📦 Components

### KYCProgressBar
Progress indicator showing current verification step.

```tsx
import { KYCProgressBar } from '@/modules/profile';

<KYCProgressBar
  currentStep={1}
  totalSteps={3}
  stepName="Government ID"
/>
```

### DocumentUploadCard
Interactive card for document upload with multiple states.

```tsx
import { DocumentUploadCard } from '@/modules/profile';

<DocumentUploadCard
  document={{
    id: 'aadhaar-front',
    type: 'aadhaar-front',
    title: 'Upload Front Side',
    description: 'Ensure good lighting, no glare.',
    icon: 'upload_file',
    status: 'pending'
  }}
  onUpload={(id) => console.log('Upload', id)}
  onRemove={(id) => console.log('Remove', id)}
/>
```

### KYCSection
Section wrapper for grouping related KYC documents.

```tsx
import { KYCSection } from '@/modules/profile';

<KYCSection
  title="Aadhaar Card"
  description="Upload clear images of the front and back."
  documents={aadhaarDocuments}
  onUpload={handleUpload}
  onRemove={handleRemove}
/>
```

## 🔧 Types

### UserProfile
```typescript
interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  memberSince: string;
  isVerified: boolean;
}
```

### KYCVerificationData
```typescript
interface KYCVerificationData {
  currentStep: number;
  totalSteps: number;
  stepName: string;
  documents: KYCDocument[];
  canSubmit: boolean;
}
```

### KYCDocument
```typescript
interface KYCDocument {
  id: string;
  type: 'aadhaar-front' | 'aadhaar-back' | 'pan' | 'selfie';
  title: string;
  description: string;
  icon: string;
  status: DocumentStatus;
  uploadedImage?: string;
  uploadedAt?: string;
}
```

### DocumentStatus
```typescript
type DocumentStatus = 'pending' | 'uploaded' | 'verified' | 'rejected';
```

## 📝 Usage

```typescript
// Import screens
import { ProfileScreen, KYCVerificationScreen } from '@/modules/profile';

// Import components
import { KYCProgressBar, DocumentUploadCard, KYCSection } from '@/modules/profile';

// Import types
import { UserProfile, KYCVerificationData, KYCDocument } from '@/modules/profile';
```

## 🔄 Demo Data

Demo data is available in `/src/demo/profile.ts`:

```typescript
import { demoUser, demoProfileItems, demoKYCVerification } from '@/demo/profile';
```

## 🎨 Design Principles

1. **Mobile-First**: All screens optimized for mobile viewing
2. **Dark Mode**: Full dark mode support throughout
3. **Progressive Disclosure**: Step-by-step verification flow
4. **Visual Feedback**: Clear status indicators for document uploads
5. **Accessibility**: Proper ARIA labels and test IDs

## 🔒 Security Considerations

- KYC documents should be uploaded over HTTPS
- Implement proper authentication checks
- Validate file types and sizes on both client and server
- Store documents securely with encryption
- Implement rate limiting for upload endpoints
- Add CAPTCHA for spam prevention

## 📍 Test IDs

KYC Verification Screen:
- `kyc-app-bar` - Top navigation
- `kyc-progress-bar` - Progress indicator
- `kyc-section` - Document section
- `document-upload-{id}` - Individual upload cards
- `submit-button` - Submit for verification button

## 🚀 Future Enhancements

- Real-time document validation
- Camera integration for live capture
- OCR for automatic data extraction
- Facial recognition for selfie verification
- Document expiry tracking
- Multi-language support
