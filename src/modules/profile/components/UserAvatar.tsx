interface UserAvatarProps {
  imageUrl: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'min-h-16 w-16',
  md: 'min-h-24 w-24',
  lg: 'min-h-32 w-32 md:min-h-40 md:w-40',
  xl: 'min-h-40 w-40 md:min-h-48 md:w-48',
};

export default function UserAvatar({ imageUrl, alt, size = 'lg' }: UserAvatarProps) {
  return (
    <div
      className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full shadow-lg ring-4 ring-white dark:ring-gray-700 ${sizeClasses[size]}`}
      style={{ backgroundImage: `url("${imageUrl}")` }}
      role="img"
      aria-label={alt}
    />
  );
}
