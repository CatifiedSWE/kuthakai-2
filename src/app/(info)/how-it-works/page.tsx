"use client";

import { HowItWorksScreen } from '@/modules/info';
import { demoRenterSteps, demoOwnerSteps } from '@/demo/info';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleStartAction = (userType: string) => {
    console.log('Start action:', userType);
    if (userType === 'For Renters') {
      router.push('/explore');
    } else {
      router.push('/list-item');
    }
  };

  return (
    <HowItWorksScreen
      renterSteps={demoRenterSteps}
      ownerSteps={demoOwnerSteps}
      onBack={handleBack}
      onStartAction={handleStartAction}
    />
  );
}
