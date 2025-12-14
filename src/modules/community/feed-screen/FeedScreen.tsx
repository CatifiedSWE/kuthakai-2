'use client';

import { FeedPost, FeaturedMember, AnnouncementCard, FeedDivider, FloatingActionButton } from '../components';
import { Post, FeaturedMember as FeaturedMemberType, Announcement } from '../types';

interface FeedScreenProps {
  posts: Post[];
  featuredMember: FeaturedMemberType;
  announcement: Announcement;
}

export default function FeedScreen({ posts, featuredMember, announcement }: FeedScreenProps) {
  return (
    <div 
      className="relative min-h-screen w-full flex-col font-display group/design-root overflow-x-hidden text-text-primary-light dark:text-text-primary-dark"
      data-testid="feed-screen"
    >
      {/* Sticky Top App Bar */}
      <div className="sticky top-0 z-50 flex items-center bg-background-light/80 dark:bg-background-dark/80 p-4 pb-2 justify-between backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="flex size-12 shrink-0 items-center justify-start">
          <span className="material-symbols-outlined text-3xl text-text-primary-light dark:text-text-primary-dark">search</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Community Feed
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button 
            className="flex cursor-pointer items-center justify-center rounded-full h-12 bg-transparent text-text-primary-light dark:text-text-primary-dark gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            data-testid="notifications-button"
          >
            <span className="material-symbols-outlined text-3xl">notifications</span>
          </button>
        </div>
      </div>

      {/* Scrollable Feed Container */}
      <main className="flex flex-col gap-4 pb-24">
        {/* First Post */}
        {posts[0] && <FeedPost post={posts[0]} />}
        
        <FeedDivider />

        {/* Featured Member Card */}
        <FeaturedMember member={featuredMember} />

        <FeedDivider />

        {/* Second Post */}
        {posts[1] && <FeedPost post={posts[1]} />}

        <FeedDivider />

        {/* Announcement Card */}
        <AnnouncementCard announcement={announcement} />
      </main>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
