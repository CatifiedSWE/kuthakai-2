import AuthLayout from '@/modules/auth/layouts/AuthLayout';
import { SignupForm } from '@/modules/auth/signup';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - Kuthakai',
  description: 'Create your Kuthakai account',
};

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignupForm />
    </AuthLayout>
  );
}
