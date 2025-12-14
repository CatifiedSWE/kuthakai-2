import { PostAuthor } from '../types';

interface PostHeaderProps {
  author: PostAuthor;
}

export default function PostHeader({ author }: PostHeaderProps) {
  const testId = author.name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="flex items-center gap-3 px-4 pb-3" data-testid={`post-header-${testId}`}>
      <img 
        className="h-10 w-10 rounded-full object-cover" 
        alt={`User avatar of ${author.name}`}
        src={author.avatar}
      />
      <div className="flex flex-col">
        <p className="text-base font-bold leading-tight tracking-[-0.015em]">
          {author.name}
        </p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
          {author.timestamp}
        </p>
      </div>
    </div>
  );
}
