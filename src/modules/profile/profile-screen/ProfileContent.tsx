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
    <>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex flex-col px-4 gap-4 pb-24">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#8a6560] dark:text-gray-400 text-base">
              {activeTab === 'listed' 
                ? 'No listed items yet' 
                : 'No rented items yet'}
            </p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <ItemCard 
              key={item.id} 
              item={item} 
              onClick={() => onItemClick?.(item)}
            />
          ))
        )}
      </div>
    </>
  );
}
