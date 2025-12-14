import { ProhibitedItemsScreen } from '@/modules/legal';
import { demoProhibitedItems } from '@/demo/legal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prohibited Items | Kuthakai',
  description: 'List of items prohibited from being listed for rental on Kuthakai peer-to-peer rental marketplace.',
};

export default function ProhibitedItemsPage() {
  return <ProhibitedItemsScreen items={demoProhibitedItems} />;
}
