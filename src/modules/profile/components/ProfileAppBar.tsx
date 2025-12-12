'use client';

import { useRouter } from 'next/navigation';

interface ProfileAppBarProps {
  title: string;
  onSettingsClick?: () => void;
  showBackButton?: boolean;
}

export default function ProfileAppBar({ 
  title, 
  onSettingsClick,
  showBackButton = true 
}: ProfileAppBarProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleSettingsClickDefault = () => {
    router.push('/settings');
  };

  return (
    <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
      {showBackButton ? (
        <button 
          onClick={handleBackClick} 
          className="text-[#181211] dark:text-white flex size-12 shrink-0 items-center justify-start"
          aria-label="Go back"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
      ) : (
        <div className="size-12" />
      )}
      
      <h2 className="text-[#181211] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
        {title}
      </h2>
      
      <div className="flex w-12 items-center justify-end">
        <button 
          onClick={onSettingsClick || handleSettingsClickDefault}
          className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-[#181211] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
          aria-label="Settings"
        >
          <span className="material-symbols-outlined text-2xl">settings</span>
        </button>
      </div>
    </div>
  );
}
