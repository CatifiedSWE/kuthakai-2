import { ExploreScreen } from '@/modules/explore';
import {
  demoExploreCategories,
  demoFeaturedItems,
  demoExploreItems,
} from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
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
