'use client';

import Link from 'next/link';

export default function WishlistScreen() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#181211] py-8 px-4 pb-24 lg:pb-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#181211] dark:text-white mb-2">
          My Wishlist
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Save items you're interested in renting
        </p>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 bg-white dark:bg-[#221210] rounded-lg border border-gray-200 dark:border-white/10">
          <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">
            favorite_border
          </span>
          <h2 className="text-xl font-semibold text-[#181211] dark:text-white mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
            Start adding items you love to your wishlist and rent them later
          </p>
          <Link
            href="/explore"
            className="px-6 py-3 bg-[#f86b59] text-white rounded-lg font-semibold hover:bg-[#e55a49] transition-colors"
          >
            Explore Items
          </Link>
        </div>
      </div>
    </div>
  );
}
