import { KYCVerificationScreen } from '@/modules/profile';
import { demoKYCVerification } from '@/demo/profile';

export const metadata = {
  title: 'KYC Verification - Kuthakai',
  description: 'Complete your identity verification',
};

export default function KYCVerificationPage() {
  return <KYCVerificationScreen initialData={demoKYCVerification} />;
}
