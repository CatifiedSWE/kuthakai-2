import { ExploreItem } from '../types';

interface ItemCardProps {
  item: ExploreItem;
  onClick?: (item: ExploreItem) => void;
}

export default function ItemCard({ item, onClick }: ItemCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <div
      className="flex flex-col gap-2 p-2 bg-surface-light dark:bg-surface-dark rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      data-testid={`item-card-${item.id}`}
    >
      {/* Item Image */}
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-md"
        style={{ backgroundImage: `url("${item.imageUrl}")` }}
        role="img"
        aria-label={item.imageAlt}
      />
      
      {/* Item Details */}
      <div className="flex flex-col p-1">
        <h3 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark truncate">
          {item.title}
        </h3>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          ₹{item.price}/{item.priceUnit}
        </p>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
          {item.distance}
        </p>
        
        {/* Owner Info */}
        <div className="flex items-center gap-2 mt-2">
          <img
            className="w-6 h-6 rounded-full object-cover"
            src={item.owner.avatar}
            alt={`Profile picture of ${item.owner.name}`}
            data-testid={`owner-avatar-${item.owner.id}`}
          />
          <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark truncate">
            {item.owner.name}
          </span>
        </div>
      </div>
    </div>
  );
}
