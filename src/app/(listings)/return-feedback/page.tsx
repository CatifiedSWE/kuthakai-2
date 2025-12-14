import { ReturnFeedbackScreen } from '@/modules/listings';
import { demoReturnItem } from '@/demo';

export const metadata = {
  title: 'Return & Feedback - Kuthakai',
  description: 'Return your rented item and provide feedback',
};

export default function Page() {
  return <ReturnFeedbackScreen item={demoReturnItem} />;
}
