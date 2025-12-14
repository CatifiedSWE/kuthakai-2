import {
  HeroSection,
  SearchBar,
  CategoryFilter,
  AvailableItems,
  TrustSection,
  CommunityStories,
  CTASection,
} from './sections';

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <SearchBar />
      <CategoryFilter />
      <AvailableItems />
      <TrustSection />
      <CommunityStories />
      <CTASection />
    </>
  );
}
