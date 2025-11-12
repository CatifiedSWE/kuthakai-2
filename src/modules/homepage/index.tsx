import { DesktopNavbar, DesktopFooter, MobileTopbar, MobileBottomNav } from '@/modules/layouts/navigation';
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
    <div className="relative flex min-h-screen w-full flex-col">
      <DesktopNavbar />
      <MobileTopbar />
      
      <main className="flex-grow pb-24 lg:pb-8">
        <HeroSection />
        <SearchBar />
        <CategoryFilter />
        <AvailableItems />
        <TrustSection />
        <CommunityStories />
        <CTASection />
      </main>

      <DesktopFooter />
      <MobileBottomNav />
    </div>
  );
}
