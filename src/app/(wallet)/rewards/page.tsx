import { RewardCenterScreen } from '@/modules/wallet';
import { demoRewardCredits, demoReferralInfo } from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reward Center - Kuthakai',
  description: 'Earn and redeem credits on Kuthakai',
};

export default function RewardsPage() {
  return (
    <RewardCenterScreen 
      credits={demoRewardCredits}
      referralInfo={demoReferralInfo}
    />
  );
}
