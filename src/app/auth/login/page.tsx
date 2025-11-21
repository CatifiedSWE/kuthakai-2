import AuthLayout from '@/modules/auth/layouts/AuthLayout';
import { LoginForm } from '@/modules/auth/login';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - Kuthakai',
  description: 'Log in to your Kuthakai account',
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
