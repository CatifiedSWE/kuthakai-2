'use client';

import { MyListingItem } from '../types';
import { MyListingCard, EmptyListingsState, ListingFloatingActionButton } from '../components';

interface MyListingsScreenProps {
  listings: MyListingItem[];
  onEdit?: (id: string) => void;
  onAddNew?: () => void;
}

export default function MyListingsScreen({ listings, onEdit, onAddNew }: MyListingsScreenProps) {
  const hasListings = listings && listings.length > 0;

  return (
    <div className="relative mx-auto flex h-full min-h-screen w-full max-w-md flex-col bg-white dark:bg-black">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-28" data-testid="my-listings-screen">
        {hasListings ? (
          <div className="flex flex-col gap-4">
            {listings.map((item) => (
              <MyListingCard key={item.id} item={item} onEdit={onEdit} />
            ))}
          </div>
        ) : (
          <EmptyListingsState onAddItem={onAddNew} />
        )}
      </main>

      {/* Floating Action Button */}
      <ListingFloatingActionButton onClick={onAddNew} />
    </div>
  );
}
