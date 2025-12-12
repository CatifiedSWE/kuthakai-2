interface VerifiedBadgeProps {
  isVerified: boolean;
  className?: string;
}

export default function VerifiedBadge({ isVerified, className = '' }: VerifiedBadgeProps) {
  if (!isVerified) return null;

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 ${className}`}>
      <span className="material-symbols-outlined text-base text-primary">verified</span>
      <p className="text-primary text-sm font-medium leading-normal">Verified</p>
    </div>
  );
}
