'use client';

interface FloatingActionButtonProps {
  icon?: string;
  onClick: () => void;
  ariaLabel?: string;
}

export default function FloatingActionButton({ 
  icon = 'edit', 
  onClick,
  ariaLabel = 'Edit profile' 
}: FloatingActionButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-20">
      <button 
        onClick={onClick}
        className="flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        aria-label={ariaLabel}
      >
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </button>
    </div>
  );
}
