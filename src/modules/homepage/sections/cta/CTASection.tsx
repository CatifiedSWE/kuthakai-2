export default function CTASection() {
  return (
    <div className="px-4 lg:px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#f86b59] text-white rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left lg:flex-1">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Earn money from your unused items
            </h3>
            <p className="text-sm lg:text-base opacity-90">
              Join our community of lenders and start making passive income today.
            </p>
          </div>
          <div className="w-full lg:w-auto lg:flex-shrink-0">
            <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white text-[#f86b59] text-base font-bold leading-normal hover:bg-gray-100 transition-colors w-full lg:w-auto">
              <span className="truncate">List an Item Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
