'use client';

import { useState, useRef, FormEvent, ClipboardEvent, KeyboardEvent, ChangeEvent } from 'react';

export default function OTPVerificationForm() {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const [error, setError] = useState<string>('');
  const [isResending, setIsResending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    // Only allow numbers
    if (value && !/^[0-9]$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    
    // Check if pasted data is 4 digits
    if (/^[0-9]{4}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      setError('');
      // Focus last input
      inputRefs.current[3]?.focus();
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    setError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('OTP resend requested');
    setIsResending(false);
    // TODO: Implement actual resend OTP API call
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Check if all digits are entered
    if (otp.some(digit => !digit)) {
      setError('Please enter all 4 digits');
      return;
    }
    
    const otpCode = otp.join('');
    
    // Clear error and handle verification (placeholder)
    setError('');
    setIsSubmitted(true);
    console.log('OTP verification attempted with code:', otpCode);
    // TODO: Implement actual OTP verification API call
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
                Verification Successful!
              </h3>
              <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
                Your code has been verified successfully. You can now proceed.
              </p>
            </div>
          </div>
        </div>
        
        <a
          href="/auth/login"
          className="flex items-center justify-center font-bold text-white bg-primary rounded-full h-14 w-full text-base shadow-lg shadow-primary/30 hover:bg-opacity-90 active:scale-[0.98] transition-all"
          data-testid="go-to-login-button"
        >
          Continue to Login
        </a>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-[#181211] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
        OTP Verification
      </h1>
      <p className="text-[#757575] dark:text-gray-400 text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
        Enter the 4-digit code sent to your email or phone.
      </p>
      
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex justify-center px-4 py-3">
          <fieldset className="relative flex gap-4">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otp[index]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="flex h-16 w-16 text-center text-2xl font-bold text-[#333333] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg border-2 bg-white dark:bg-[#2a1d1b] transition-colors
                  ${error ? 'border-red-500 dark:border-red-500' : 'border-[#E0E0E0] dark:border-gray-600 focus:border-primary dark:focus:border-primary'}"
                data-testid={`otp-input-${index}`}
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </fieldset>
        </div>
        
        {error && (
          <div className="flex items-center justify-center gap-2 text-red-500 dark:text-red-400 pt-2 px-4" data-testid="otp-error">
            <span className="material-symbols-outlined text-base">error</span>
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}
        
        <div className="pt-8 pb-6 text-center">
          <p className="text-[#757575] dark:text-gray-400 text-sm font-normal leading-normal">
            Didn't receive the code?{' '}
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="font-bold text-primary underline hover:text-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              data-testid="resend-otp-button"
            >
              {isResending ? 'Sending...' : 'Resend'}
            </button>
          </p>
        </div>
        
        <button
          type="submit"
          className="flex items-center justify-center font-bold text-white bg-primary rounded-full h-14 w-full text-base shadow-lg shadow-primary/30 hover:bg-opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          data-testid="otp-verify-button"
        >
          Verify
        </button>
      </form>
    </>
  );
}
