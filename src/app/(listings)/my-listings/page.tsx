import { MyListingsScreen } from '@/modules/listings';
import { demoMyListings } from '@/demo';

export const metadata = {
  title: 'My Listings - Kuthakai',
  description: 'Manage your listed items on Kuthakai',
};

export default function Page() {
  const handleEdit = (id: string) => {
    console.log('Edit item:', id);
  };

  const handleAddNew = () => {
    console.log('Add new item');
  };

  return (
    <MyListingsScreen
      listings={demoMyListings}
      onEdit={handleEdit}
      onAddNew={handleAddNew}
    />
  );
}
