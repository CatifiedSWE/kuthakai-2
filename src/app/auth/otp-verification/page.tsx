import { Metadata } from 'next';
import AuthLayout from '@/modules/auth/layouts/AuthLayout';
import { OTPVerificationForm } from '@/modules/auth/otp-verification';

export const metadata: Metadata = {
  title: 'OTP Verification | Kuthakai',
  description: 'Verify your account with the OTP code',
};

export default function OTPVerificationPage() {
  return (
    <AuthLayout>
      <OTPVerificationForm />
    </AuthLayout>
  );
}
