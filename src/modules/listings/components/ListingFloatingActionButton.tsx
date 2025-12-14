interface ListingFloatingActionButtonProps {
  onClick?: () => void;
}

export default function ListingFloatingActionButton({ onClick }: ListingFloatingActionButtonProps) {
  return (
    <div className="fixed bottom-24 right-5 z-10 sm:bottom-28 sm:right-[calc(50%-10rem)]">
      <button
        onClick={onClick}
        className="flex h-14 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-primary pl-4 pr-5 text-white shadow-lg hover:bg-primary/90"
        data-testid="add-new-item-button"
      >
        <span className="material-symbols-outlined text-2xl">add</span>
        <span className="truncate text-base font-bold">Add New Item</span>
      </button>
    </div>
  );
}
