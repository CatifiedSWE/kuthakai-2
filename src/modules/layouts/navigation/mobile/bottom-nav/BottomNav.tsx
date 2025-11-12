'use client';

import { usePathname } from 'next/navigation';
import { mobileNavItems } from '@/demo';

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 h-20 w-full bg-white/90 dark:bg-[#221210]/90 backdrop-blur-lg border-t border-gray-200/80 dark:border-white/10">
      <div className="flex h-full items-center justify-around px-2">
        {mobileNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'text-[#f86b59]'
                  : 'text-gray-500 dark:text-gray-400 hover:text-[#f86b59]'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">
                {item.icon}
              </span>
              <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
