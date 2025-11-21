'use client';
import Image from 'next/image'
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
          <Image
      src="/web-app-manifest-512x512.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
        </Link>
        
        {children}
      </div>
    </div>
  );
}
