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
    <>
      {/* Mobile: Horizontal Layout (Original) */}
      <div 
        className="flex md:hidden items-stretch justify-between gap-4 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors p-2 -m-2"
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

      {/* Desktop: Vertical Card Layout (New) */}
      <div 
        className="hidden md:flex flex-col rounded-xl cursor-pointer hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
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
    </>
  );
}
