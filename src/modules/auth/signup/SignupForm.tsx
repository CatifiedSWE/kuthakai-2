'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Input, PasswordInput, SocialButton } from '../components';

export default function SignupForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ fullName?: string; email?: string; password?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: { fullName?: string; email?: string; password?: string } = {};
    
    if (!fullName || fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and handle signup (placeholder)
    setErrors({});
    console.log('Signup attempted with:', { fullName, email, password });
    // TODO: Implement actual signup logic
  };

  return (
    <>
      <h1 className="text-[#181211] dark:text-white tracking-tight text-[32px] font-bold leading-tight text-center pb-2 pt-2">
        Create an Account
      </h1>
      
      <div className="flex w-full flex-col gap-3 pt-6">
        <SocialButton provider="google" data-testid="google-signup-button">
          Continue with Google
        </SocialButton>
        
        <SocialButton provider="facebook" data-testid="facebook-signup-button">
          Continue with Facebook
        </SocialButton>
      </div>
      
      <div className="relative flex w-full items-center py-6">
        <div className="flex-grow border-t border-[#e6dcdb] dark:border-gray-600"></div>
        <span className="mx-4 flex-shrink text-sm font-medium text-[#8a6560] dark:text-gray-500">or</span>
        <div className="flex-grow border-t border-[#e6dcdb] dark:border-gray-600"></div>
      </div>
      
      <form onSubmit={handleSubmit} className="flex w-full flex-col items-stretch gap-4">
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={errors.fullName}
          data-testid="signup-name-input"
        />
        
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          data-testid="signup-email-input"
        />
        
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          data-testid="signup-password-input"
        />
        
        <button
          type="submit"
          className="flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-2.5 text-lg font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-background-dark mt-4 transition-all"
          data-testid="signup-submit-button"
        >
          Create Account
        </button>
      </form>
      
      <p className="pt-6 text-center text-base text-[#8a6560] dark:text-gray-400">
        Already have an account?{' '}
        <Link 
          href="/auth/login" 
          className="font-medium text-primary hover:underline transition-colors"
          data-testid="login-link"
        >
          Log In
        </Link>
      </p>
    </>
  );
}
