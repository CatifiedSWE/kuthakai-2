'use client';

import { useRouter } from 'next/navigation';
import { ItemDetails } from '../types';
import ItemImageCarousel from '../components/ItemImageCarousel';
import OwnerCard from '../components/OwnerCard';
import LocationCard from '../components/LocationCard';
import ReviewsList from '../components/ReviewsList';

interface ItemDetailsScreenProps {
  item: ItemDetails;
}

export default function ItemDetailsScreen({ item }: ItemDetailsScreenProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/explore');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.name,
        text: item.description,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleRentNow = () => {
    router.push(`/booking-checkout?itemId=${item.id}`);
  };

  const handleViewOwnerProfile = () => {
    console.log('View owner profile:', item.owner.id);
    // router.push(`/profile/${item.owner.id}`);
  };

  const handleSeeAllReviews = () => {
    console.log('See all reviews');
    // router.push(`/item/${item.id}/reviews`);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col group/design-root overflow-x-hidden text-text-primary-light dark:text-text-primary-dark pb-28 bg-background-light dark:bg-background-dark">
      {/* Top App Bar */}
      <div className="sticky top-0 z-10 flex items-center bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-4 justify-between" data-testid="item-details-app-bar">
        <div className="flex w-12 items-center">
          <button
            onClick={handleBack}
            className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Go back"
            data-testid="back-button"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
        </div>
        <h2 className="text-lg font-bold">Details</h2>
        <div className="flex w-12 items-center justify-end">
          <button
            onClick={handleShare}
            className="flex items-center justify-center size-10 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Share item"
            data-testid="share-button"
          >
            <span className="material-symbols-outlined text-2xl">share</span>
          </button>
        </div>
      </div>

      <main className="flex-grow">
        {/* Header Image Carousel */}
        <ItemImageCarousel images={item.images} itemName={item.name} />

        {/* Headline and Price */}
        <div className="px-4 pt-4">
          <h1 className="text-3xl font-bold tracking-tight" data-testid="item-name">{item.name}</h1>
          <p className="text-2xl font-bold pt-2 text-primary" data-testid="item-price">
            ₹{item.pricePerDay} / day
          </p>
        </div>

        {/* Body Text / Description */}
        <p className="text-base font-normal leading-relaxed pt-2 px-4 text-text-secondary-light dark:text-text-secondary-dark" data-testid="item-description">
          {item.description}
        </p>

        <hr className="my-6 border-border-light dark:border-border-dark mx-4" />

        {/* Owner Card */}
        <OwnerCard owner={item.owner} onViewProfile={handleViewOwnerProfile} />

        {/* Location Card */}
        <LocationCard location={item.location} />

        {/* Reviews Section */}
        <ReviewsList reviews={item.reviews} onSeeAll={handleSeeAllReviews} />
      </main>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-light to-transparent dark:from-background-dark dark:to-transparent" data-testid="rent-now-footer">
        <button
          onClick={handleRentNow}
          className="w-full h-14 bg-primary text-white text-lg font-bold rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
          data-testid="rent-now-button"
        >
          Rent Now
        </button>
      </div>
    </div>
  );
}
