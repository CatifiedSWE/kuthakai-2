import { FeaturedMemberData } from '../types';

interface FeaturedMemberProps {
  member: FeaturedMemberData;
}

export default function FeaturedMember({ member }: FeaturedMemberProps) {
  return (
    <div className="p-4 @container" data-testid="featured-member-card">
      <div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-white dark:bg-background-dark dark:border dark:border-gray-800">
        <div 
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-lg @xl:rounded-l-lg @xl:rounded-tr-none @xl:w-2/5"
          style={{ backgroundImage: `url("${member.image}")` }}
          role="img"
          aria-label={`Professional headshot of ${member.name}`}
        />
        <div className="flex w-full grow flex-col items-stretch justify-center gap-3 p-4 @xl:w-3/5">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">
            Featured Member
          </p>
          <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-text-primary-light dark:text-text-primary-dark">
            {member.name}
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
            {member.description}
          </p>
          <button 
            className="flex min-w-[84px] w-full max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal mt-2"
            data-testid="featured-member-view-profile"
          >
            <span className="truncate">View Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
