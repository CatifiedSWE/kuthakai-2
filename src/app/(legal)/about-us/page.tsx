import { AboutUsScreen } from '@/modules/legal';
import { teamMembers } from '@/demo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Kuthakai',
  description: 'Learn about Kuthakai\'s story, mission, and the team building India\'s most trusted peer-to-peer rental marketplace',
};

export default function AboutUsPage() {
  const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYYqiScEn4D8Nwz0bh14ocQDTjBJSpB7JJmgAt8DY884cQXl-KzAWxAHua0ZjV5MliohEBLc9jo3L9gXvBUJbzDEWVUmKZTYq-g5Xn-Iu7xaIUvP8GSWyfDhw4W0haBRSwfW2Hy1Ml2DJHcxwMqcDXr1lhTZHLQYoj68qx-XqvxpwxbbtbAMFTOZfVtIIZ-FbdpmUKMtA8dYnFyNAPJRqkvWgrwUXPe-yuLB4iSx0Gs5Gsh9cmeVVnmpCl4pz-cc47p9JrBl9H1D4q';
  const heroAlt = 'A diverse group of friends smiling and sharing items, representing a vibrant community';
  
  const storyContent = 'Kuthakai was born from a simple idea: to make borrowing and lending items as easy and trustworthy as a conversation with a neighbor. We saw a world full of useful things sitting unused, and a community of people who could benefit from them. Our journey began to connect these dots, creating a platform that fosters sharing, sustainability, and community.';
  
  const missionContent = 'Our mission is to build a trusted community where people can easily share more and own less. We are committed to making life more affordable and sustainable by empowering individuals to unlock the value in their possessions and connect with their local community in a meaningful way.';

  return (
    <AboutUsScreen
      heroImage={heroImage}
      heroAlt={heroAlt}
      storyContent={storyContent}
      missionContent={missionContent}
      teamMembers={teamMembers}
    />
  );
}
