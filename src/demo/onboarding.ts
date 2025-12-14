import { OnboardingStep } from '@/modules/onboarding';

export const findAndRentStep: OnboardingStep = {
  id: 'find-and-rent',
  title: 'Find Anything, Rent Easily',
  description: 'Discover and rent thousands of items from your neighbors.',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNHnyecfpGjkYwD9S5eCvr1yZhgffM0wt8-QnykVv_A_0b9kVonL6NgPjNXzZ6HJ3bpGtwZfqem7aAwybc-Vny5mMVHKH4rAaJ8NjKvQb47tNKqiriHY9PM4lXz7cRGWJvUwxBqIuucJcrPQuJ325JKt07duMBrLWRgvswlT_E3Qg1wcPHsTA2GodrHHD9gC_60m2BjyUYhL3dwIIbap78rvbpd33KnhXWpO9TVHrVC_BCL9A-gWNuLnCtgPWbNaatMudulvhPoB3h',
  imageAlt: 'Stylized illustration of a person happily holding a modern camera, ready to take a picture.',
  currentStep: 2,
  totalSteps: 3,
  ctaText: 'Continue',
  ctaLink: '/onboarding/list-and-earn',
};

export const listAndEarnStep: OnboardingStep = {
  id: 'list-and-earn',
  title: 'List & Earn',
  description: 'Turn your unused gear into cash. List an item in minutes and start earning.',
  imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjbpQGEDE3ytwdU7Bl6dCdef7I8uUy5LiIRFfsQ2GpFooGc7TcMZUeW1uQyJ9baUusIjRqqpJNtrEdlAwm2iNiU89BobBIREdlJy7A3aJbK4avdqw_ArpQ5As4KsQD4_-ed297PyTH_NTr-gGFe-qG1QTsCPb0Zma8TZUb-K0FzCiUDRrSWrEdCYrTNK0r5bi4gVaxxsnT7npiiQ1iRC7juJeCEvdmXFVIJa8WJnaqycXxwqFGteWy8xyW9MMlTmHBzm8iM7CGVySL',
  imageAlt: 'Illustration of various rental items like a camera and camping gear with floating coins, symbolizing earning money from them.',
  currentStep: 3,
  totalSteps: 3,
  ctaText: 'Get Started',
  ctaLink: '/',
};
