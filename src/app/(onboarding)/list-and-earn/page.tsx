import { ListAndEarnScreen } from '@/modules/onboarding';
import { listAndEarnStep } from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'List & Earn - Kuthakai',
  description: 'Turn your unused gear into cash. List an item in minutes and start earning.',
};

export default function Page() {
  return <ListAndEarnScreen data={listAndEarnStep} />;
}
