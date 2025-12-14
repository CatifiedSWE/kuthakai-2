import { RequestsApprovalsScreen } from '@/modules/listings';
import { demoRentalRequests } from '@/demo';

export const metadata = {
  title: 'Requests & Approvals - Kuthakai',
  description: 'Manage incoming rental requests for your items',
};

export default function Page() {
  return <RequestsApprovalsScreen initialRequests={demoRentalRequests} />;
}
