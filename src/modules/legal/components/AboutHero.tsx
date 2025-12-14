interface AboutHeroProps {
  imageUrl: string;
  altText: string;
}

export default function AboutHero({ imageUrl, altText }: AboutHeroProps) {
  return (
    <div className="@container px-4" data-testid="about-hero">
      <div 
        className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-lg min-h-60"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        role="img"
        aria-label={altText}
      />
    </div>
  );
}
