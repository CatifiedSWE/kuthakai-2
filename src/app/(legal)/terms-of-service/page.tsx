import { TermsOfServiceScreen } from '@/modules/legal';
import { demoTermsOfServiceContent } from '@/demo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Kuthakai',
  description: 'Read the terms of service for Kuthakai peer-to-peer rental marketplace',
};

export default function TermsOfServicePage() {
  return <TermsOfServiceScreen content={demoTermsOfServiceContent} />;
}
