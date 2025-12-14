'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  CategoryPill,
  FeaturedItemCard,
  ViewToggle,
  ItemCard,
} from '../components';
import { Category, ExploreItem, FeaturedItem, ViewMode } from '../types';

interface ExploreScreenProps {
  categories: Category[];
  featuredItems: FeaturedItem[];
  items: ExploreItem[];
}

export default function ExploreScreen({
  categories,
  featuredItems,
  items,
}: ExploreScreenProps) {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]?.id || '');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const handleCategoryClick = (category: Category) => {
    setActiveCategory(category.id);
    console.log('Category selected:', category);
    // Filter items by category - would typically fetch from API
  };

  const handleFeaturedItemClick = (item: FeaturedItem) => {
    console.log('Featured item clicked:', item);
    // Navigate to item details
    // router.push(`/item/${item.id}`);
  };

  const handleItemClick = (item: ExploreItem) => {
    console.log('Item clicked:', item);
    // Navigate to item details
    // router.push(`/item/${item.id}`);
  };

  const handleViewChange = (view: ViewMode) => {
    setViewMode(view);
    console.log('View mode changed to:', view);
    if (view === 'map') {
      // Navigate to map view or show map component
      console.log('Map view selected - implement map functionality');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <main className="flex flex-col flex-1">
        {/* Horizontal Category Pills */}
        <div className="w-full pl-4 overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 py-3">
            {categories.map((category) => (
              <CategoryPill
                key={category.id}
                category={category}
                isActive={activeCategory === category.id}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>

        {/* Featured Items Carousel */}
        <div>
          <h2 className="text-text-primary-light dark:text-text-primary-dark text-2xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Featured Items
          </h2>
          <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch p-4 pt-0 gap-4">
              {featuredItems.map((item) => (
                <FeaturedItemCard
                  key={item.id}
                  item={item}
                  onClick={handleFeaturedItemClick}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <ViewToggle defaultView="grid" onChange={handleViewChange} />

        {/* Item Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-2 gap-4 px-4 pb-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
        )}

        {/* Map View Placeholder */}
        {viewMode === 'map' && (
          <div className="flex items-center justify-center min-h-[400px] px-4 pb-4">
            <div className="text-center">
              <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">map</span>
              <p className="text-text-primary-light dark:text-text-primary-dark text-lg font-semibold">
                Map View
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-2">
                Map integration coming soon
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
