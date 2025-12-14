'use client';

interface FloatingActionButtonProps {
  onClick?: () => void;
  icon?: string;
  ariaLabel?: string;
}

export default function FloatingActionButton({
  onClick,
  icon = 'add',
  ariaLabel = 'Add new item',
}: FloatingActionButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('FAB clicked - Add new item');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-20">
      <button
        onClick={handleClick}
        className="flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
        aria-label={ariaLabel}
        data-testid="floating-action-button"
      >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </button>
    </div>
  );
}
