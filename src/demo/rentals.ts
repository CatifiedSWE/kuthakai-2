import { RentalItem } from '@/modules/rentals';

// Create deadlines for active rentals
const now = new Date();
const deadline1 = new Date(now.getTime() + (2 * 24 * 60 * 60 * 1000) + (4 * 60 * 60 * 1000) + (37 * 60 * 1000)); // 2 days, 4 hours, 37 minutes
const deadline2 = new Date(now.getTime() + (5 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000) + (15 * 60 * 1000)); // 5 days, 18 hours, 15 minutes

export const demoRentals: RentalItem[] = [
  {
    id: 'rental-1',
    itemName: 'Canon EOS R5 Camera',
    ownerName: 'Jane D.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmH9Q3VSuxyXqdqva066cJJ_U5n2DOQISqUMM-LnmtO-vVEa49f_EifR4jtPzjepptH2bIAjKo2HrrKjVuNOh8C2mV-63PAwqtjvXqrCd6bTnxP-JA0COOWImqVhgCS_sHnrkVl_sTAbTlhIv0on-55EjX7ttYTJntWaP5cVgmmwKCfsOdv5edSgruTz9VDrWng2YA1gyws2K0cGYrWM3g8nZo0GrH1BZsZ4RnikFnyPqPJmVhFoAKwbhMN413hAQte9tixHtj7SEN',
    imageAlt: 'A professional Canon EOS R5 camera body with a lens attached.',
    startDate: 'Oct 25',
    endDate: 'Nov 02',
    status: 'active',
    returnDeadline: deadline1,
  },
  {
    id: 'rental-2',
    itemName: 'Professional Drone Kit',
    ownerName: 'Mike L.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuXzRKBPMClE6Nhmed7T9C8MD-qxz3tr7EXllrFoF4m6fZl4xOyhkSWlqDQXBXxPV4d9lKdyRiRotzrkzfr6XyOZA8lZnky9iaa1W7VecoxoyxgMHxPHPPMCe7Y2S6VLZBnS95qIPW0TIFEgi_TUXPfTBW16NvN6WCGVgJ99SxYDGqWJmPbLDaKWaZIUGhuF6_Mia36EfNOh5IxwyRWNEpnmxRHiFbnWFoWoDOIK_vqOI-ar9RoQIJ2Kygrjox3btPb0bMxSWQxhNR',
    imageAlt: 'A white professional drone with its controller on a wooden surface.',
    startDate: 'Oct 28',
    endDate: 'Nov 05',
    status: 'active',
    returnDeadline: deadline2,
  },
];
