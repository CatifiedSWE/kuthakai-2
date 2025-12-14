interface PostActionsProps {
  likes: number;
  comments: number;
  shares: number;
}

export default function PostActions({ likes, comments, shares }: PostActionsProps) {
  const formatCount = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className="flex flex-wrap gap-4 px-1 py-1" data-testid="post-actions">
      <div className="flex items-center justify-center gap-2 px-3 py-2">
        <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">favorite</span>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-[13px] font-bold leading-normal tracking-[0.015em]">
          {formatCount(likes)}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 px-3 py-2">
        <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">chat_bubble</span>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-[13px] font-bold leading-normal tracking-[0.015em]">
          {formatCount(comments)}
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 px-3 py-2">
        <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">share</span>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-[13px] font-bold leading-normal tracking-[0.015em]">
          {formatCount(shares)}
        </p>
      </div>
    </div>
  );
}
