'use client';

import { ButtonHTMLAttributes } from 'react';

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'facebook';
  children: React.ReactNode;
}

export default function SocialButton({ provider, children, className = '', ...props }: SocialButtonProps) {
  const icons = {
    google: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9999 12.227C21.9999 11.39 21.9363 10.582 21.809 9.8H12.2182V14.39H17.7272C17.5181 15.827 16.8272 17.064 15.7726 17.791V20.573H19.5363C21.1363 19.109 21.9999 16.918 21.9999 14.227V12.227Z" fill="#4285F4"></path>
        <path d="M12.2182 22C15.0182 22 17.3728 21.055 19.5364 19.573L15.7728 17.791C14.8637 18.382 13.6546 18.773 12.2182 18.773C9.591 18.773 7.37279 17.027 6.55461 14.7H2.68643V17.555C4.54552 20.255 8.08188 22 12.2182 22Z" fill="#34A853"></path>
        <path d="M6.55455 14.7C6.34545 14.109 6.22727 13.482 6.22727 12.827C6.22727 12.173 6.34545 11.545 6.55455 10.955V8.09999H2.68636C2.26364 9.01817 2 10.036 2 11.127C2 12.218 2.26364 13.236 2.68636 14.155L6.55455 14.7Z" fill="#FBBC05"></path>
        <path d="M12.2182 6.873C13.7364 6.873 15.1091 7.4 16.2091 8.418L19.6091 5.018C17.3637 2.945 15.0182 2 12.2182 2C8.08182 2 4.54545 4.745 2.68636 8.1L6.55455 10.955C7.37273 8.627 9.59091 6.873 12.2182 6.873Z" fill="#EA4335"></path>
      </svg>
    ),
    facebook: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="#1877F2"></path>
      </svg>
    ),
  };

  return (
    <button
      type="button"
      className={`flex h-14 w-full items-center justify-center gap-3 rounded-full border border-[#e6dcdb] bg-white text-base font-medium text-[#181211] transition-all hover:bg-gray-50 hover:shadow-md active:scale-[0.98] dark:bg-[#2a1d1b] dark:border-gray-700 dark:text-white dark:hover:bg-[#352320] ${className}`}
      {...props}
    >
      {icons[provider]}
      {children}
    </button>
  );
}
