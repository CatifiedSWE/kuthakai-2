interface UserAvatarProps {
  imageUrl: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'min-h-16 w-16',
  md: 'min-h-24 w-24',
  lg: 'min-h-32 w-32',
  xl: 'min-h-40 w-40',
};

export default function UserAvatar({ imageUrl, alt, size = 'lg' }: UserAvatarProps) {
  return (
    <div
      className={`bg-center bg-no-repeat aspect-square bg-cover rounded-full ${sizeClasses[size]}`}
      style={{ backgroundImage: `url("${imageUrl}")` }}
      role="img"
      aria-label={alt}
    />
  );
}
