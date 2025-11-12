export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export const demoCategories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'electronics', name: 'Electronics' },
  { id: 'outdoor', name: 'Outdoor' },
  { id: 'tools', name: 'Tools' },
  { id: 'party-events', name: 'Party & Events' },
  { id: 'sports-gear', name: 'Sports Gear' },
  { id: 'photography', name: 'Photography' },
  { id: 'home-garden', name: 'Home & Garden' },
];
