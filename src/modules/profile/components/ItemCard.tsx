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
      className="flex items-stretch justify-between gap-4 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors p-2 -m-2"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      <div className="flex flex-col gap-1 flex-[2_2_0px] py-2">
        <p className="text-[#8a6560] dark:text-gray-400 text-sm font-normal leading-normal">
          {item.status}
        </p>
        <p className="text-[#181211] dark:text-white text-base font-bold leading-tight">
          {item.name}
        </p>
        <p className="text-[#8a6560] dark:text-gray-400 text-sm font-normal leading-normal">
          {item.price}
        </p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
        role="img"
        aria-label={item.imageAlt}
      />
    </div>
  );
}
