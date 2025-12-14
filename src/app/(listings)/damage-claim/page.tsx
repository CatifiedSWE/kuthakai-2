import { DamageClaimScreen } from '@/modules/listings';
import { demoDamageClaim } from '@/demo';

export const metadata = {
  title: 'Damage Claim - Kuthakai',
  description: 'Submit a damage claim for your rental item',
};

export default function Page() {
  return <DamageClaimScreen initialData={demoDamageClaim} />;
}
