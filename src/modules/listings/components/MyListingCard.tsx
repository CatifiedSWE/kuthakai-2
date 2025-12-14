import { MyListingItem } from '../types';

interface MyListingCardProps {
  item: MyListingItem;
  onEdit?: (id: string) => void;
}

export default function MyListingCard({ item, onEdit }: MyListingCardProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'available':
        return {
          label: 'Available',
          bgColor: 'bg-green-100 dark:bg-green-900/50',
          textColor: 'text-green-800 dark:text-green-300',
          dotColor: 'bg-green-500',
        };
      case 'rented':
        return {
          label: 'Rented Out',
          bgColor: 'bg-blue-100 dark:bg-blue-900/50',
          textColor: 'text-blue-800 dark:text-blue-300',
          dotColor: 'bg-blue-500',
        };
      case 'pending':
        return {
          label: 'Pending Approval',
          bgColor: 'bg-orange-100 dark:bg-orange-900/50',
          textColor: 'text-orange-800 dark:text-orange-300',
          dotColor: 'bg-orange-500',
        };
      default:
        return {
          label: status,
          bgColor: 'bg-neutral-100 dark:bg-neutral-900/50',
          textColor: 'text-neutral-800 dark:text-neutral-300',
          dotColor: 'bg-neutral-500',
        };
    }
  };

  const statusConfig = getStatusConfig(item.status);

  return (
    <div className="flex gap-4 rounded-lg border border-neutral-100 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
      <img
        className="h-24 w-24 shrink-0 rounded-lg bg-neutral-200 object-cover"
        src={item.imageUrl}
        alt={item.imageAlt}
      />
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-bold text-neutral-800 dark:text-neutral-100">
            {item.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
            {item.price}
          </p>
          <div
            className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${statusConfig.bgColor} ${statusConfig.textColor}`}
          >
            <span className={`size-1.5 rounded-full ${statusConfig.dotColor}`}></span>
            {statusConfig.label}
          </div>
        </div>
        <button
          onClick={() => onEdit?.(item.id)}
          className="mt-2 self-end rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-bold text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
