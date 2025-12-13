import { RentalItem } from '../types';

interface ItemCardProps {
  item: RentalItem;
  onClick?: () => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className="flex flex-col rounded-xl cursor-pointer hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover"
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
        role="img"
        aria-label={item.imageAlt}
      />
      
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <p className="text-[#8a6560] dark:text-gray-400 text-xs font-semibold uppercase tracking-wide">
            {item.status}
          </p>
        </div>
        <p className="text-[#181211] dark:text-white text-lg font-bold leading-tight">
          {item.name}
        </p>
        <p className="text-[#d84315] dark:text-[#ff6f3c] text-base font-semibold">
          {item.price}
        </p>
      </div>
    </div>
  );
}
