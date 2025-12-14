interface ImageCarouselProps {
  images: string[];
  postId: string;
}

export default function ImageCarousel({ images, postId }: ImageCarouselProps) {
  return (
    <div 
      className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pl-4"
      data-testid={`image-carousel-${postId}`}
    >
      <div className="flex items-stretch gap-3">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 w-60 ${index === images.length - 1 ? 'pr-4' : ''}`}
          >
            <div 
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
              style={{ backgroundImage: `url("${image}")` }}
              role="img"
              aria-label={`Image ${index + 1} of ${images.length}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
