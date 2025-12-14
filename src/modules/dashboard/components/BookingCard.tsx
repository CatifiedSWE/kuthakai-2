import { Booking } from '../types';

interface BookingCardProps {
  booking: Booking;
  onClick?: (booking: Booking) => void;
}

export default function BookingCard({ booking, onClick }: BookingCardProps) {
  const statusColors = {
    confirmed: 'bg-[#078809]',
    pending: 'bg-yellow-500',
    completed: 'bg-gray-400',
  };

  const handleClick = () => {
    if (onClick) {
      onClick(booking);
    }
  };

  return (
    <div
      className="flex items-center gap-4 bg-content-light dark:bg-content-dark p-3 rounded-lg justify-between cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
      data-testid={`booking-card-${booking.id}`}
    >
      <div className="flex items-center gap-4 w-full">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg h-16 w-16 shrink-0"
          style={{ backgroundImage: `url("${booking.itemImage}")` }}
          role="img"
          aria-label={booking.imageAlt}
        />
        <div className="flex flex-col justify-center overflow-hidden">
          <p className="text-text-primary-light dark:text-text-primary-dark text-base font-medium leading-normal truncate">
            {booking.itemName}
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal truncate">
            {booking.startDate} - {booking.endDate}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="flex size-7 items-center justify-center">
          <div
            className={`size-2.5 rounded-full ${statusColors[booking.status]}`}
            title={booking.status}
            aria-label={`Status: ${booking.status}`}
          />
        </div>
      </div>
    </div>
  );
}
