'use client';

import { LeaderboardScreen } from '@/modules/community';
import { demoLeaderboardUsers } from '@/demo';

export default function Page() {
  const handleCityFilter = () => {
    console.log('Filter by city clicked');
  };

  const handleCollegeFilter = () => {
    console.log('Filter by college clicked');
  };

  return (
    <LeaderboardScreen
      users={demoLeaderboardUsers}
      onCityFilterClick={handleCityFilter}
      onCollegeFilterClick={handleCollegeFilter}
    />
  );
}
