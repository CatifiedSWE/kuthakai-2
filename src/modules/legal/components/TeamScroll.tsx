import TeamMember from './TeamMember';
import { TeamMember as TeamMemberType } from '../types';

interface TeamScrollProps {
  title: string;
  members: TeamMemberType[];
}

export default function TeamScroll({ title, members }: TeamScrollProps) {
  return (
    <>
      <h2 
        className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-4 pt-6"
        data-testid="team-section-title"
      >
        {title}
      </h2>
      <div className="w-full overflow-x-auto pb-4" data-testid="team-scroll-container">
        <div className="flex flex-nowrap gap-6 px-4">
          {members.map((member) => (
            <TeamMember
              key={member.id}
              name={member.name}
              role={member.role}
              avatar={member.avatar}
            />
          ))}
        </div>
      </div>
    </>
  );
}
