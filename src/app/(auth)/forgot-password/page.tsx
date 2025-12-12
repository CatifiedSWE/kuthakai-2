import { Metadata } from 'next';
import AuthLayout from '@/modules/auth/layouts/AuthLayout';
import { ForgotPasswordForm } from '@/modules/auth/forgot-password';

export const metadata: Metadata = {
  title: 'Forgot Password | Kuthakai',
  description: 'Reset your Kuthakai account password',
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
