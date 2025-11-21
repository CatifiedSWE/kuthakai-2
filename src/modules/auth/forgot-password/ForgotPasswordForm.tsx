'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { Input } from '../components';

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: { email?: string } = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and handle forgot password (placeholder)
    setErrors({});
    setIsSubmitted(true);
    console.log('Password reset link requested for:', email);
    // TODO: Implement actual forgot password API call
  };

  if (isSubmitted) {
    return (
      <div className="w-full">
        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-2xl">
              check_circle
            </span>
            <div>
              <h3 className="text-green-800 dark:text-green-300 font-semibold text-base mb-1">
                Email Sent!
              </h3>
              <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
                We've sent a password reset link to <span className="font-medium">{email}</span>. Please check your inbox and follow the instructions.
              </p>
            </div>
          </div>
        </div>
        
        <Link
          href="/auth/login"
          className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-base"
          data-testid="back-to-login-link"
        >
          <span className="material-symbols-outlined text-xl">arrow_back</span>
          Back to Login
        </Link>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-[#181211] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
        Forgot Password
      </h1>
      <p className="text-[#8a6560] dark:text-gray-400 text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
        Enter your email to receive a password reset link.
      </p>
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          data-testid="forgot-password-email-input"
        />
        
        <button
          type="submit"
          className="flex items-center justify-center font-bold text-white bg-primary rounded-full h-14 w-full mt-8 text-base shadow-lg shadow-primary/30 hover:bg-opacity-90 active:scale-[0.98] transition-all"
          data-testid="forgot-password-submit-button"
        >
          Send Reset Link
        </button>
      </form>
      
      <div className="pt-8 text-center">
        <Link
          href="/auth/login"
          className="text-[#8a6560] dark:text-gray-400 text-sm font-medium hover:text-primary dark:hover:text-primary transition-colors"
          data-testid="back-to-login-link"
        >
          Remember your password? <span className="font-bold">Back to Login</span>
        </Link>
      </div>
    </>
  );
}
