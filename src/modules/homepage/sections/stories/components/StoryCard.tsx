import Image from 'next/image';

interface StoryCardProps {
  name: string;
  action: string;
  image: string;
  story: string;
}

export default function StoryCard({ name, action, image, story }: StoryCardProps) {
  return (
    <div className="bg-white dark:bg-[#221210]/80 rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-sm text-[#181211] dark:text-white">
            {name}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {action}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        &quot;{story}&quot;
      </p>
    </div>
  );
}
