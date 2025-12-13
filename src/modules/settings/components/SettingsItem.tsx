'use client';

import { useRouter } from 'next/navigation';

interface SettingsItemProps {
  icon: string;
  label: string;
  href: string;
  showDivider?: boolean;
}

export default function SettingsItem({ icon, label, href, showDivider = true }: SettingsItemProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  const testId = label.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');

  return (
    <>
      <button
        onClick={handleClick}
        className="flex min-h-14 items-center justify-between gap-4 p-3 w-full text-left hover:bg-zinc-50 dark:hover:bg-zinc-700/30 transition-colors"
        data-testid={`settings-item-${testId}`}
      >
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <p className="flex-1 truncate text-base font-medium leading-normal text-zinc-900 dark:text-zinc-50">
            {label}
          </p>
        </div>
        <div className="shrink-0">
          <div className="flex size-7 items-center justify-center text-zinc-400 dark:text-zinc-500">
            <span className="material-symbols-outlined">chevron_right</span>
          </div>
        </div>
      </button>
      {showDivider && <hr className="border-zinc-100 dark:border-zinc-700 ml-16" />}
    </>
  );
}
