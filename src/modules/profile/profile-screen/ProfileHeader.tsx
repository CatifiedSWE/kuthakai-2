import { UserAvatar, VerifiedBadge } from '../components';
import { UserProfile } from '../types';

interface ProfileHeaderProps {
  user: UserProfile;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex p-4 @container">
      <div className="flex w-full flex-col gap-4 items-center">
        <div className="flex gap-4 flex-col items-center">
          <UserAvatar 
            imageUrl={user.avatar} 
            alt={`User avatar of ${user.name}`}
            size="lg"
          />
          
          <div className="flex flex-col items-center justify-center gap-1">
            <p className="text-[#181211] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
              {user.name}
            </p>
            <p className="text-[#8a6560] dark:text-gray-400 text-base font-normal leading-normal text-center">
              Member since {user.memberSince}
            </p>
            <VerifiedBadge isVerified={user.isVerified} className="mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
