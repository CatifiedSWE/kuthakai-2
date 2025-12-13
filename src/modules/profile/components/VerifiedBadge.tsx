interface VerifiedBadgeProps {
  isVerified: boolean;
  className?: string;
}

export default function VerifiedBadge({ isVerified, className = '' }: VerifiedBadgeProps) {
  if (!isVerified) return null;

  return (
    <div className={`inline-flex items-center gap-1.5 md:gap-2 rounded-full bg-primary/20 px-3 md:px-4 py-1 md:py-2 ${className}`}>
      <span className="material-symbols-outlined text-base md:text-lg text-primary">verified</span>
      <p className="text-primary text-sm md:text-base font-medium leading-normal">Verified</p>
    </div>
  );
}
