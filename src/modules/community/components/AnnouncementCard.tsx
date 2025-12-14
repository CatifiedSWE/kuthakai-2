import { Announcement } from '../types';

interface AnnouncementCardProps {
  announcement: Announcement;
}

export default function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <div className="p-4" data-testid="announcement-card">
      <div className="flex flex-col items-start gap-4 rounded-lg bg-primary/10 dark:bg-primary/20 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
            <span className="material-symbols-outlined">campaign</span>
          </div>
          <p className="text-base font-bold text-primary">Kuthakai Announcement</p>
        </div>
        <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          {announcement.title}
        </h3>
        <p className="text-base font-normal leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
          {announcement.description}
        </p>
      </div>
    </div>
  );
}
