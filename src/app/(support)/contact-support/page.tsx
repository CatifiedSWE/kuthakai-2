import { ContactSupportScreen } from '@/modules/support';
import { demoSupportOptions, demoEmergencySupport } from '@/demo';

export const metadata = {
  title: 'Contact & Support - Kuthakai',
  description: 'Get help and support for your rental needs',
};

export default function Page() {
  return (
    <ContactSupportScreen
      supportOptions={demoSupportOptions}
      emergencySupport={demoEmergencySupport}
    />
  );
}
