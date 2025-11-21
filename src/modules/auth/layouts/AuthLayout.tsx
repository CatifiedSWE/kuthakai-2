'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const router = useRouter();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[#f8f6f5] dark:bg-[#221210] p-4 sm:p-6">
      {/* Back Button - Fixed Position */}
      <button
        onClick={() => router.back()}
        className="fixed top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-[#2a1d1b] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#352320] transition-colors z-10 group"
        aria-label="Go back"
        data-testid="back-button"
      >
        <span className="material-symbols-outlined text-[#181211] dark:text-white text-xl">
          arrow_back
        </span>
        <span className="text-sm font-medium text-[#181211] dark:text-white hidden sm:inline">
          Back
        </span>
      </button>

      <div className="flex w-full max-w-sm flex-col items-center">
        {/* Logo */}
        <Link href="/" className="pb-8 hover:opacity-80 transition-opacity" data-testid="auth-logo">
          <svg fill="none" height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#f86b59"></path>
            <path d="M24.7925 35.8337V24.887L34.1258 19.362L24.7925 13.927V2.98035L43.4592 13.927V24.887L24.7925 35.8337Z" fill="#FFFFFF"></path>
            <path d="M4.54102 24.887V13.927L23.2077 2.98035V13.927L13.8744 19.362L23.2077 24.887V35.8337L4.54102 24.887Z" fill="#FFFFFF" fillOpacity="0.8"></path>
          </svg>
        </Link>
        
        {children}
      </div>
    </div>
  );
}
