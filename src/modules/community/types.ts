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

export interface FeaturedMember {
  name: string;
  description: string;
  image: string;
}

export interface Announcement {
  title: string;
  description: string;
}
