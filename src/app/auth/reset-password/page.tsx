import { Metadata } from 'next';
import AuthLayout from '@/modules/auth/layouts/AuthLayout';
import { ResetPasswordForm } from '@/modules/auth/reset-password';

export const metadata: Metadata = {
  title: 'Reset Password | Kuthakai',
  description: 'Create a new password for your Kuthakai account',
};

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
}
