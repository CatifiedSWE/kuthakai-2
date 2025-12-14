import { RentalAgreementScreen } from '@/modules/legal';
import { demoRentalAgreement } from '@/demo/legal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rental Agreement | Kuthakai',
  description: 'Review and sign the rental agreement for your item rental on Kuthakai.',
};

export default function RentalAgreementPage() {
  return <RentalAgreementScreen agreement={demoRentalAgreement} />;
}
