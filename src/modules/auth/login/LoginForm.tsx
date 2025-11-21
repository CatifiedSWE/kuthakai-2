'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Input, PasswordInput, SocialButton } from '../components';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and handle login (placeholder)
    setErrors({});
    console.log('Login attempted with:', { email, password });
    // TODO: Implement actual login logic
  };

  return (
    <>
      <h1 className="text-[#181211] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
        Welcome Back
      </h1>
      <p className="text-[#8a6560] dark:text-gray-400 text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
        Log in to your Kuthakai account
      </p>
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          data-testid="login-email-input"
        />
        
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          data-testid="login-password-input"
        />
        
        <div className="w-full pt-2">
          <Link 
            href="/auth/forgot-password" 
            className="text-right text-primary text-sm font-medium leading-normal underline cursor-pointer hover:text-primary/80 transition-colors block"
            data-testid="forgot-password-link"
          >
            Forgot Password?
          </Link>
        </div>
        
        <button
          type="submit"
          className="flex items-center justify-center font-bold text-white bg-primary rounded-full h-14 w-full mt-8 text-base shadow-lg shadow-primary/30 hover:bg-opacity-90 active:scale-[0.98] transition-all"
          data-testid="login-submit-button"
        >
          Log In
        </button>
      </form>
      
      <div className="flex w-full items-center gap-4 py-8">
        <hr className="w-full border-t border-[#e6dcdb] dark:border-gray-600" />
        <p className="text-sm font-medium text-[#8a6560] dark:text-gray-500">OR</p>
        <hr className="w-full border-t border-[#e6dcdb] dark:border-gray-600" />
      </div>
      
      <div className="flex w-full flex-col space-y-4">
        <SocialButton provider="google" data-testid="google-login-button">
          Continue with Google
        </SocialButton>
        
        <SocialButton provider="facebook" data-testid="facebook-login-button">
          Continue with Facebook
        </SocialButton>
      </div>
      
      <p className="pt-8 text-center text-base text-[#8a6560] dark:text-gray-400">
        Don&apos;t have an account?{' '}
        <Link 
          href="/auth/signup" 
          className="font-bold text-primary underline hover:text-primary/80 transition-colors"
          data-testid="signup-link"
        >
          Sign Up
        </Link>
      </p>
    </>
  );
}
