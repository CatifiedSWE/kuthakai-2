'use client';

import { LeaderboardUser } from '../types';
import { LeaderboardCard, FilterButton } from '../components';

interface LeaderboardScreenProps {
  users: LeaderboardUser[];
  onCityFilterClick?: () => void;
  onCollegeFilterClick?: () => void;
}

export default function LeaderboardScreen({
  users,
  onCityFilterClick,
  onCollegeFilterClick,
}: LeaderboardScreenProps) {
  // Separate current user from the list
  const currentUser = users.find((user) => user.isCurrentUser);
  const topUsers = users.filter((user) => !user.isCurrentUser && user.rank <= 4);
  const nearbyUsers = users.filter((user) => !user.isCurrentUser && user.rank > 4);

  return (
    <div
      className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col bg-background-light dark:bg-background-dark overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Filters */}
      <div className="flex gap-3 px-4 py-2 flex-wrap">
        <FilterButton
          icon="location_city"
          label="Filter by City"
          onClick={onCityFilterClick}
        />
        <FilterButton
          icon="school"
          label="Filter by College"
          onClick={onCollegeFilterClick}
        />
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* User List */}
      <main className="flex flex-col gap-2 px-4 pb-8" data-testid="leaderboard-screen">
        {/* Top Users */}
        {topUsers.map((user) => (
          <LeaderboardCard key={user.id} user={user} />
        ))}

        {/* Divider */}
        {currentUser && <div className="h-4"></div>}

        {/* Current User Highlight */}
        {currentUser && <LeaderboardCard user={currentUser} />}

        {/* Spacer */}
        {nearbyUsers.length > 0 && <div className="h-2"></div>}

        {/* Nearby Users */}
        {nearbyUsers.map((user) => (
          <LeaderboardCard key={user.id} user={user} />
        ))}
      </main>
    </div>
  );
}
