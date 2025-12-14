import { LeaderboardUser } from '../types';

interface LeaderboardCardProps {
  user: LeaderboardUser;
}

export default function LeaderboardCard({ user }: LeaderboardCardProps) {
  const isTopRank = user.rank === 1;
  const isCurrentUser = user.isCurrentUser;

  const cardClasses = isCurrentUser
    ? 'bg-primary/10 dark:bg-primary/20 border border-primary/50'
    : 'bg-white dark:bg-zinc-800 shadow-sm shadow-gray-200/50 dark:shadow-none';

  const textClasses = isCurrentUser
    ? 'text-primary'
    : 'text-text-primary dark:text-white';

  const borderClass = isTopRank && !isCurrentUser ? 'border border-gold' : '';

  return (
    <div
      className={`flex items-center gap-4 rounded-lg p-3 min-h-[72px] justify-between ${cardClasses} ${borderClass}`}
      data-testid={isCurrentUser ? 'current-user-card' : `leaderboard-card-${user.rank}`}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            className="rounded-full h-14 w-14 object-cover"
            src={user.avatar}
            alt={`Profile picture of ${user.name}`}
          />
          {isTopRank && (
            <div className="absolute -top-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-gold">
              <span className="material-symbols-outlined text-base !text-white">
                workspace_premium
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <p className={`text-base font-bold leading-normal line-clamp-1 ${textClasses}`}>
            #{user.rank} {user.name}
          </p>
          <p className="text-text-secondary dark:text-gray-400 text-sm font-normal leading-normal line-clamp-2">
            {user.location}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <p className={`text-base font-medium leading-normal ${textClasses}`}>
          {user.itemsRentedOut} Items Rented Out
        </p>
      </div>
    </div>
  );
}
