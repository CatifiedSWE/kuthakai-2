'use client';

import { useState } from 'react';
import { TabBar, ItemCard } from '../components';
import { RentalItem, TabType } from '../types';

interface ProfileContentProps {
  items: RentalItem[];
  onItemClick?: (item: RentalItem) => void;
}

export default function ProfileContent({ items, onItemClick }: ProfileContentProps) {
  const [activeTab, setActiveTab] = useState<TabType>('listed');

  const filteredItems = items.filter((item) => {
    if (activeTab === 'listed') {
      return item.status === 'Listed';
    }
    return item.status === 'Rented Out';
  });

  return (
    <div className="w-full max-w-7xl mx-auto">
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="px-4 md:px-8 pb-24">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12 md:py-20">
            <p className="text-[#8a6560] dark:text-gray-400 text-base md:text-lg">
              {activeTab === 'listed' 
                ? 'No listed items yet' 
                : 'No rented items yet'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <ItemCard 
                key={item.id} 
                item={item} 
                onClick={() => onItemClick?.(item)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
