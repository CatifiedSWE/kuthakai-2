import Image from 'next/image';

interface ItemCardProps {
  title: string;
  distance: string;
  price: number;
  image: string;
  currency?: string;
}

export default function ItemCard({ title, distance, price, image, currency = '₹' }: ItemCardProps) {
  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
          <span className="material-symbols-outlined text-[#f86b59] text-xl">favorite_border</span>
        </button>
      </div>
      <h4 className="font-semibold text-sm leading-tight text-[#181211] dark:text-white line-clamp-2">
        {title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">{distance}</p>
      <p className="font-bold text-base text-[#181211] dark:text-white">
        {currency}{price}
        <span className="font-normal text-sm text-gray-500 dark:text-gray-400">/day</span>
      </p>
    </div>
  );
}
