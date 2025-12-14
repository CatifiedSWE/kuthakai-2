'use client';

import { useRouter } from 'next/navigation';

interface DashboardAppBarProps {
  userName: string;
  userAvatar: string;
  showBackButton?: boolean;
  title?: string;
}

export default function DashboardAppBar({
  userName,
  userAvatar,
  showBackButton = false,
  title,
}: DashboardAppBarProps) {
  const router = useRouter();

  const handleSearch = () => {
    console.log('Search clicked');
    // Navigate to search page when available
  };

  const handleBack = () => {
    router.back();
  };

  if (showBackButton && title) {
    // Back button layout for earnings summary
    return (
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10">
        <button
          onClick={handleBack}
          className="flex size-10 shrink-0 items-center justify-center text-text-primary dark:text-gray-200"
          aria-label="Go back"
          data-testid="back-button"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h2 className="text-text-primary dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          {title}
        </h2>
      </div>
    );
  }

  // Default layout for dashboard overview
  return (
    <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
      <div className="flex size-12 shrink-0 items-center">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{ backgroundImage: `url("${userAvatar}")` }}
          role="img"
          aria-label="User profile avatar"
          data-testid="user-avatar"
        />
      </div>
      <h2 className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 ml-2">
        Good morning, {userName}!
      </h2>
      <div className="flex w-12 items-center justify-end">
        <button
          onClick={handleSearch}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-text-primary-light dark:text-text-primary-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          aria-label="Search"
          data-testid="search-button"
        >
          <span className="material-symbols-outlined text-2xl">search</span>
        </button>
      </div>
    </div>
  );
}
