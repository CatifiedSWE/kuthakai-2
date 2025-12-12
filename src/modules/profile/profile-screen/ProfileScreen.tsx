'use client';

import { useRouter } from 'next/navigation';
import { ProfileAppBar, FloatingActionButton } from '../components';
import ProfileHeader from './ProfileHeader';
import ProfileContent from './ProfileContent';
import { UserProfile, RentalItem } from '../types';

interface ProfileScreenProps {
  user: UserProfile;
  items: RentalItem[];
}

export default function ProfileScreen({ user, items }: ProfileScreenProps) {
  const router = useRouter();

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
    // Navigate to edit profile page when available
    // router.push('/profile/edit');
  };

  const handleItemClick = (item: RentalItem) => {
    console.log('Item clicked:', item);
    // Navigate to item details when available
    // router.push(`/item/${item.id}`);
  };

  const handleSettingsClick = () => {
    router.push('/settings');
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      <ProfileAppBar 
        title={user.name} 
        onSettingsClick={handleSettingsClick}
        showBackButton={true}
      />
      
      <ProfileHeader user={user} />
      
      <ProfileContent 
        items={items} 
        onItemClick={handleItemClick}
      />
      
      <FloatingActionButton 
        icon="edit" 
        onClick={handleEditProfile}
        ariaLabel="Edit profile"
      />
    </div>
  );
}
