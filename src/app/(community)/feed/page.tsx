import { FeedScreen } from '@/modules/community';
import { communityPosts, featuredMember, announcement } from '@/demo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Feed - Kuthakai',
  description: 'Connect with the Kuthakai community. Share your rental experiences, discover featured members, and stay updated with the latest announcements',
};

export default function CommunityFeedPage() {
  return (
    <FeedScreen 
      posts={communityPosts}
      featuredMember={featuredMember}
      announcement={announcement}
    />
  );
}
