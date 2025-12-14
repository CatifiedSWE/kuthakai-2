import { FindAndRentScreen } from '@/modules/onboarding';
import { findAndRentStep } from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find & Rent - Kuthakai',
  description: 'Discover and rent thousands of items from your neighbors.',
};

export default function Page() {
  return <FindAndRentScreen data={findAndRentStep} />;
}
