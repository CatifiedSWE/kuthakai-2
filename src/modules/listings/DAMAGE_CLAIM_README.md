# Damage Claim Feature

## Overview
The Damage Claim module allows users to report damage to rented items with detailed descriptions and photographic evidence.

---

## 📁 Structure

```
listings/
├── components/
│   ├── DamageDetailsDisplay.tsx        # Read-only rental info display
│   ├── DamageDescriptionInput.tsx      # Textarea with character count & validation
│   ├── PhotoGallery.tsx                # Photo grid with add/remove functionality
│   └── ...
├── damage-claim-screen/
│   ├── DamageClaimScreen.tsx           # Main damage claim form
│   └── index.ts
├── damage-claim-types.ts               # Damage claim specific types
└── ...
```

---

## 🎨 Components

### DamageDetailsDisplay
Displays read-only rental information (item name, renter name, rental dates).

**Props:**
- `rentalInfo: RentalInfo` - Rental details

**Features:**
- Clean, read-only display
- Consistent styling with disabled inputs

---

### DamageDescriptionInput
Textarea with character count and validation.

**Props:**
- `value: string` - Current description
- `onChange: (value: string) => void` - Change handler
- `maxLength?: number` - Maximum characters (default: 1000)
- `error?: string` - Validation error message

**Features:**
- Real-time character count
- Color changes when approaching limit (red at 90%)
- Form validation with error display
- Auto-resize disabled (fixed rows)
- Focus states with primary color ring

---

### PhotoGallery
Interactive photo grid with add/remove functionality.

**Props:**
- `photos: PhotoEvidence[]` - Array of photos
- `onPhotosChange: (photos: PhotoEvidence[]) => void` - Photos change handler
- `maxPhotos?: number` - Maximum photos allowed (default: 6)
- `error?: string` - Validation error message

**Features:**
- 3-column grid layout
- Remove photo with confirmation toast
- Add photo button (simulated upload)
- Photo counter (e.g., "2/6")
- Max photos enforcement
- Hover effects on remove buttons
- Scale animations on interactions

---

### DamageClaimScreen
Main screen composing all damage claim components with form logic.

**Props:**
- `initialData: DamageClaimData` - Initial form data
- `onBack?: () => void` - Back navigation handler

**Features:**
- Complete form state management
- Multi-field validation:
  - Description required (min 20 characters)
  - At least 1 photo required
- Real-time error clearing
- Submit loading state
- Success toast notification
- Sticky footer with gradient
- Backdrop blur on header

---

## ⚡ Interactive Features

### 1. **Form Validation**
```typescript
// Validation rules:
- Description: Required, minimum 20 characters
- Photos: At least 1 photo required

// Validation triggers:
- On submit button click
- Errors clear on field change
```

### 2. **Character Counter**
- Real-time count display
- Color changes:
  - Normal: gray (0-900 chars)
  - Warning: red (901-1000 chars)
- Max length enforcement

### 3. **Photo Management**
- **Add Photos:**
  - Click "Add Photos" button
  - Simulated upload (random Unsplash image)
  - Max 6 photos enforced
  
- **Remove Photos:**
  - Click X button on photo
  - Immediate removal
  - Confirmation toast (2s)

### 4. **Form Submission**
- Validates all fields
- Shows loading spinner (2s simulation)
- Success toast notification
- Button disabled during submission

---

## 📊 State Management

```typescript
// Component state
const [description, setDescription] = useState('');
const [photos, setPhotos] = useState<PhotoEvidence[]>([]);
const [errors, setErrors] = useState<{}>({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
```

---

## 🎨 Design Details

### Colors
- **Primary:** #f86b59
- **Background:** White / Zinc-900 (dark)
- **Text:** Zinc-800 / Zinc-200 (dark)
- **Borders:** Zinc-200 / Zinc-700 (dark)
- **Error:** Red-500

### Border Radius
- **Inputs:** rounded-xl (0.75rem)
- **Photos:** rounded-xl (0.75rem)
- **Buttons:** rounded-full

### Spacing
- **Section margin:** mb-6
- **Input padding:** p-4
- **Grid gap:** gap-3

---

## 🧪 Testing Identifiers

All interactive elements have `data-testid`:

- `back-button` - Back navigation
- `damage-description-input` - Textarea
- `photo-{id}` - Each photo container
- `remove-photo-{id}` - Remove photo buttons
- `add-photo-button` - Add photo button
- `submit-claim-button` - Submit button
- `success-toast` - Success notification

---

## 📱 Responsive Behavior

### Photo Grid
- **Mobile (all sizes):** 3 columns
- **Photo aspect ratio:** 1:1 (square)
- **Gap:** 12px (gap-3)

### Form Fields
- **Full width:** All inputs span container width
- **Touch targets:** 56px minimum (h-14)
- **Readable line length:** Textarea optimized for mobile

---

## 💡 Usage Example

```tsx
import { DamageClaimScreen } from '@/modules/listings';
import { demoDamageClaim } from '@/demo';

export default function Page() {
  return (
    <DamageClaimScreen
      initialData={demoDamageClaim}
      onBack={() => console.log('Navigate back')}
    />
  );
}
```

---

## 🔄 Data Flow

```
User Action → State Update → Validation → Submit → Success
     ↓             ↓              ↓           ↓         ↓
  Type text   setDescription  validate()  API call  Toast
  Add photo   setPhotos       errors?     Loading   3s auto
  Remove      filter photos   clear       2s sim    dismiss
```

---

## 🎯 Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| Description | Required | "Please describe the damage" |
| Description | Min 20 chars | "Description must be at least 20 characters" |
| Photos | Min 1 photo | "Please add at least one photo of the damage" |

---

## ✨ UX Enhancements

1. **Real-time Feedback**
   - Character count updates live
   - Errors clear on field change
   - Photo count badge

2. **Visual Indicators**
   - Red text/border for errors
   - Loading spinner during submit
   - Success toast with icon

3. **Smooth Interactions**
   - Button scale animations (active:scale-[0.98])
   - Remove button scale (hover:scale-110)
   - Toast slide-down animation

4. **Accessibility**
   - Proper label associations
   - Error messages linked to inputs
   - Focus states clearly visible
   - Disabled state for submit button

---

## 🚀 Future Enhancements

- [ ] Real file upload (not simulated)
- [ ] Image compression before upload
- [ ] Photo preview modal
- [ ] Drag-and-drop photo upload
- [ ] Auto-save draft
- [ ] Photo captions/annotations
- [ ] Video evidence support
- [ ] Estimated repair cost field
- [ ] Email confirmation after submit
- [ ] Claim tracking page

---

## 📝 Types Reference

```typescript
interface RentalInfo {
  itemName: string;
  renterName: string;
  rentalDates: string;
}

interface PhotoEvidence {
  id: string;
  url: string;
  alt: string;
}

interface DamageClaimData {
  rentalInfo: RentalInfo;
  description: string;
  photos: PhotoEvidence[];
}
```

---

**Status:** ✅ Production Ready  
**Route:** `/damage-claim`  
**Module:** `@/modules/listings`
