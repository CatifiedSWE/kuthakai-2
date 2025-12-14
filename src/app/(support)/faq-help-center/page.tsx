"use client";

import { FAQHelpCenterScreen } from '@/modules/support';
import { demoFAQCategories } from '@/demo/support';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log('Category clicked:', categoryId);
    // Navigate to specific FAQ category or show details
  };

  const handleContactSupport = () => {
    router.push('/contact-support');
  };

  return (
    <FAQHelpCenterScreen
      categories={demoFAQCategories}
      onBack={handleBack}
      onCategoryClick={handleCategoryClick}
      onContactSupport={handleContactSupport}
    />
  );
}
