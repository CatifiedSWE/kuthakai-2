interface TeamMemberProps {
  name: string;
  role: string;
  avatar: string;
}

export default function TeamMember({ name, role, avatar }: TeamMemberProps) {
  const testId = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div 
      className="flex flex-col items-center gap-2 flex-shrink-0"
      data-testid={`team-member-${testId}`}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
        <img 
          alt={`${name}, ${role}`}
          className="w-full h-full object-cover" 
          src={avatar}
        />
      </div>
      <div className="text-center">
        <p className="font-semibold text-sm text-text-light dark:text-text-dark">
          {name}
        </p>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          {role}
        </p>
      </div>
    </div>
  );
}
