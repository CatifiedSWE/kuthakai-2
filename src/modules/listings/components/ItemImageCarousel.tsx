'use client';

import { useState } from 'react';
import { ItemImage } from '../types';

interface ItemImageCarouselProps {
  images: ItemImage[];
  itemName: string;
}

export default function ItemImageCarousel({ images, itemName }: ItemImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="@container" data-testid="item-image-carousel">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden @[480px]:rounded-lg min-h-[350px]"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("${currentImage.url}")`
          }}
          data-testid="carousel-image"
        >
          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 p-5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? 'h-2 w-6 bg-white'
                    : 'size-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`View image ${index + 1}`}
                data-testid={`carousel-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
