interface AboutSectionProps {
  title: string;
  content: string;
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  const sectionId = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <>
      <h2 
        className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-6"
        data-testid={`about-section-title-${sectionId}`}
      >
        {title}
      </h2>
      <p 
        className="text-text-light dark:text-text-dark text-base font-normal leading-relaxed px-4"
        data-testid={`about-section-content-${sectionId}`}
      >
        {content}
      </p>
    </>
  );
}
