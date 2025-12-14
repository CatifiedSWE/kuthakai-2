import { Notification } from '../types';

interface NotificationCardProps {
  notification: Notification;
  onClick?: (notification: Notification) => void;
}

export default function NotificationCard({ notification, onClick }: NotificationCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(notification);
    }
  };

  return (
    <div
      className="relative flex items-center gap-4 bg-content-light dark:bg-content-dark p-3 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      data-testid={`notification-card-${notification.id}`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
        <span className="material-symbols-outlined">{notification.icon}</span>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal">
          {notification.title}
        </p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
          {notification.description}
        </p>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-xs">
          {notification.timestamp}
        </p>
        {notification.isUnread && (
          <div className="size-2 rounded-full bg-blue-500" aria-label="Unread" />
        )}
      </div>
    </div>
  );
}
