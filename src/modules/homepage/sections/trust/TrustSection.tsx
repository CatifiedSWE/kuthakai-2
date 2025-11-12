import { demoTrustFeatures } from '@/demo';

export default function TrustSection() {
  return (
    <div className="px-4 lg:px-6 py-12 bg-[#f86b59]/10 dark:bg-[#f86b59]/20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-[#181211] dark:text-white mb-8">
          A Community You Can Trust
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {demoTrustFeatures.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white dark:bg-[#221210]/80 text-[#f86b59] shadow-lg">
                <span className="material-symbols-outlined text-3xl lg:text-4xl">
                  {feature.icon}
                </span>
              </div>
              <p className="text-sm lg:text-base font-semibold text-[#181211] dark:text-white">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
