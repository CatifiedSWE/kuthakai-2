import { FeaturedItem } from '../types';

interface FeaturedItemCardProps {
  item: FeaturedItem;
  onClick?: (item: FeaturedItem) => void;
}

export default function FeaturedItemCard({ item, onClick }: FeaturedItemCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <div
      className="flex h-full flex-1 flex-col gap-3 rounded-lg min-w-[280px] cursor-pointer hover:opacity-90 transition-opacity"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      data-testid={`featured-item-${item.id}`}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
        role="img"
        aria-label={item.imageAlt}
      />
      <div>
        <p className="text-text-primary-light dark:text-text-primary-dark text-lg font-bold leading-normal">
          {item.title}
        </p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">
          ₹{item.price}/{item.priceUnit}
        </p>
      </div>
    </div>
  );
}
