import { demoItems } from '@/demo';
import ItemCard from './components/ItemCard';

export default function AvailableItems() {
  return (
    <div className="px-4 lg:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-[#181211] dark:text-white">
            Available Near You
          </h3>
          <button className="flex items-center gap-2 rounded-full h-10 px-4 bg-[#f86b59]/20 dark:bg-[#f86b59]/30 text-[#f86b59] dark:text-white text-sm font-semibold hover:bg-[#f86b59]/30 transition-colors">
            <span className="material-symbols-outlined text-lg">map</span>
            <span>Map</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
          {demoItems.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              distance={item.distance}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
