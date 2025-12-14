'use client';

import { ProfileAppBar } from '@/modules/profile';
import { AboutHero, AboutSection, TeamScroll } from '../components';
import { TeamMember } from '../types';

interface AboutUsScreenProps {
  heroImage: string;
  heroAlt: string;
  storyContent: string;
  missionContent: string;
  teamMembers: TeamMember[];
}

export default function AboutUsScreen({
  heroImage,
  heroAlt,
  storyContent,
  missionContent,
  teamMembers
}: AboutUsScreenProps) {
  return (
    <div 
      className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display group/design-root overflow-x-hidden"
      data-testid="about-us-screen"
    >
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="text-text-light dark:text-text-dark flex size-12 shrink-0 items-center justify-start -ml-3">
          <span className="material-symbols-outlined">arrow_back</span>
        </div>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          About Us
        </h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      {/* Header Image */}
      <AboutHero imageUrl={heroImage} altText={heroAlt} />

      {/* Our Story Section */}
      <AboutSection 
        title="Our Story" 
        content={storyContent}
      />

      {/* Our Mission Section */}
      <AboutSection 
        title="Our Mission" 
        content={missionContent}
      />

      {/* Meet the Team Section */}
      <TeamScroll 
        title="Meet the Team" 
        members={teamMembers}
      />

      {/* Bottom Spacing */}
      <div className="h-8 bg-background-light dark:bg-background-dark"></div>
    </div>
  );
}
