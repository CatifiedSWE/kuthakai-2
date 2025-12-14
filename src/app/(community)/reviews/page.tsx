import { ReviewsScreen } from '@/modules/community';
import {
  demoRatingSummary,
  demoReviewsReceived,
  demoReviewsGiven,
} from '@/demo';

export const metadata = {
  title: 'Reviews & Ratings - Kuthakai',
  description: 'View your overall rating and reviews from other users',
};

export default function Page() {
  return (
    <ReviewsScreen
      ratingSummary={demoRatingSummary}
      reviewsReceived={demoReviewsReceived}
      reviewsGiven={demoReviewsGiven}
    />
  );
}
