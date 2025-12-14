// Community module types

export interface PostAuthor {
  name: string;
  avatar: string;
  timestamp: string;
}

export interface Post {
  id: string;
  author: PostAuthor;
  content: string;
  images: string[];
  likes: number;
  comments: number;
  shares: number;
}

export interface FeaturedMemberData {
  name: string;
  description: string;
  image: string;
}

export interface Announcement {
  title: string;
  description: string;
}

// Leaderboard Types
export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  location: string;
  itemsRentedOut: number;
  avatar: string;
  isCurrentUser?: boolean;
}

export type FilterType = 'city' | 'college';
