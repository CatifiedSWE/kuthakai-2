import { EarningsSummaryScreen } from '@/modules/dashboard';
import { demoEarningsSummary } from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earnings Summary - Kuthakai',
  description: 'View your detailed earnings breakdown and transaction history',
};

export default function Page() {
  return <EarningsSummaryScreen data={demoEarningsSummary} />;
}
