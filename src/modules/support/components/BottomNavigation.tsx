'use client';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
  isFilled?: boolean;
}

interface BottomNavigationProps {
  onNavigate?: (id: string) => void;
}

const navItems: NavItem[] = [
  { id: 'explore', label: 'Explore', icon: 'search' },
  { id: 'wishlists', label: 'Wishlists', icon: 'favorite' },
  { id: 'trips', label: 'Trips', icon: 'map' },
  { id: 'inbox', label: 'Inbox', icon: 'inbox' },
  { id: 'profile', label: 'Profile', icon: 'person', isActive: true, isFilled: true },
];

export default function BottomNavigation({ onNavigate }: BottomNavigationProps) {
  return (
    <nav className="flex gap-2 border-t border-gray-300/50 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 pb-3 pt-2 sticky bottom-0 z-10">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate?.(item.id)}
          data-testid={`nav-${item.id}`}
          className={`flex flex-1 flex-col items-center justify-end gap-1 transition-colors ${
            item.isActive
              ? 'text-[#f86b59]'
              : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
          }`}
        >
          <div className="flex h-8 items-center justify-center">
            <span
              className="material-symbols-outlined"
              style={item.isFilled ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
          </div>
          <p className="text-xs font-medium leading-normal tracking-[0.015em]">
            {item.label}
          </p>
        </button>
      ))}
    </nav>
  );
}
