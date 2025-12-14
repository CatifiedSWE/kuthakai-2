export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export const desktopNavItems: NavItem[] = [
  { id: 'explore', label: 'Explore', href: '/explore' },
  { id: 'community', label: 'Community', href: '/feed' },
  { id: 'about', label: 'About', href: '/about-us' },
];

export const mobileNavItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '/', icon: 'home' },
  { id: 'explore', label: 'Explore', href: '/explore', icon: 'explore' },
  { id: 'community', label: 'Community', href: '/feed', icon: 'groups' },
  { id: 'wishlist', label: 'Wishlist', href: '/wishlist', icon: 'favorite' },
  { id: 'profile', label: 'Profile', href: '/profile', icon: 'person' },
];

export const guestMenuItems: NavItem[] = [
  { id: 'login', label: 'Login', href: '/login' },
  { id: 'signup', label: 'Sign Up', href: '/signup' },
  { id: 'help', label: 'Help Center', href: '/faq-help-center' },
  { id: 'refer', label: 'Refer & Earn', href: '/refer' },
];

export const userMenuItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', href: '/overview' },
  { id: 'earnings', label: 'Earnings', href: '/earnings-summary' },
  { id: 'profile', label: 'My Profile', href: '/profile' },
  { id: 'listings', label: 'My Listings', href: '/my-listings' },
  { id: 'rentals', label: 'My Rentals', href: '/my-rentals' },
  { id: 'help', label: 'Help Center', href: '/faq-help-center' },
];
