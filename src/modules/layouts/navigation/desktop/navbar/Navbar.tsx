'use client';

import Image from 'next/image';
import { useState } from 'react';
import { desktopNavItems, guestMenuItems, userMenuItems, defaultLocation } from '@/demo';

interface DesktopNavbarProps {
  isLoggedIn?: boolean;
}

export default function DesktopNavbar({ isLoggedIn = false }: DesktopNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);

  return (
    <header className="hidden lg:block sticky top-0 z-50 w-full bg-white dark:bg-[#221210] border-b border-gray-200 dark:border-white/10">
       <div className="w-full px-8 py-1.5">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center -ml-2">
            <Image
              src="/logo/Kuthakai_Logo.png"
              alt="Kuthakai"
              width={140}
              height={40}
              className="object-contain"
              style={{ height: 'auto', width: '140px' }}
            />
          </div>

          {/* Center Navigation - Guest */}
          {!isLoggedIn && (
            <nav className="flex items-center gap-8">
              {desktopNavItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-[#181211] dark:text-white hover:text-[#f86b59] font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Location */}
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[#f86b59] text-xl">location_on</span>
              <span className="font-semibold text-sm text-[#181211] dark:text-white">
                {currentLocation.name}
              </span>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-[#181211] dark:text-white text-xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-6 top-full mt-2 w-64 bg-white dark:bg-[#221210] rounded-lg shadow-lg border border-gray-200 dark:border-white/10 overflow-hidden">
          {!isLoggedIn ? (
            <>
              {guestMenuItems.map((item, index) => (
                <div key={item.id}>
                  {index === 2 && (
                    <div className="border-t border-gray-200 dark:border-white/10"></div>
                  )}
                  <a
                    href={item.href}
                    className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-[#181211] dark:text-white font-medium"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="px-6 py-4 border-b border-gray-200 dark:border-white/10">
                <p className="font-semibold text-[#181211] dark:text-white">John Doe</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">john@example.com</p>
              </div>
              {userMenuItems.map((item, index) => (
                <div key={item.id}>
                  {index === userMenuItems.length - 1 && (
                    <div className="border-t border-gray-200 dark:border-white/10"></div>
                  )}
                  <a
                    href={item.href}
                    className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-[#181211] dark:text-white"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
              <button className="w-full text-left px-6 py-3 hover:bg-gray-50 dark:hover:bg-white/5 text-red-600 dark:text-red-400">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}
