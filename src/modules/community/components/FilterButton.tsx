interface FilterButtonProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

export default function FilterButton({ icon, label, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/10 dark:bg-primary/20 pl-4 pr-4 text-primary hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
      data-testid={`filter-button-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span className="material-symbols-outlined text-lg">{icon}</span>
      <p className="text-sm font-medium leading-normal">{label}</p>
      <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
    </button>
  );
}
