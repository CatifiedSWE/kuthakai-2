'use client';

import { useState, FormEvent } from 'react';
import { PasswordInput } from '../components';

export default function ResetPasswordForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{ newPassword?: string; confirmPassword?: string; match?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: { newPassword?: string; confirmPassword?: string; match?: string } = {};
    
    if (!newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    }
    
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      newErrors.match = 'Passwords do not match';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Clear errors and handle password reset (placeholder)
    setErrors({});
    setIsSubmitted(true);
    console.log('Password reset attempted');
    // TODO: Implement actual password reset API call
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
                Password Reset Successful!
              </h3>
              <p className="text-green-700 dark:text-green-400 text-sm leading-relaxed">
                Your password has been successfully reset. You can now log in with your new password.
              </p>
            </div>
          </div>
        </div>
        
        <a
          href="/auth/login"
          className="flex items-center justify-center font-bold text-white bg-primary rounded-full h-14 w-full text-base shadow-lg shadow-primary/30 hover:bg-opacity-90 active:scale-[0.98] transition-all"
          data-testid="go-to-login-button"
        >
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-[#181211] dark:text-white tracking-light text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
        Create a new password
      </h1>
      <p className="text-[#8a6560] dark:text-gray-400 text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
        Your new password must be different from previous used passwords.
      </p>
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <PasswordInput
          label="New Password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          error={errors.newPassword}
          data-testid="reset-password-new-input"
        />
        
        <PasswordInput
          label="Confirm New Password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          data-testid="reset-password-confirm-input"
        />
        
        <p className="text-sm font-normal text-[#8a6560] dark:text-gray-500 pt-2">
          Must be at least 8 characters long.
        </p>
        
        {errors.match && (
          <div className="flex items-center gap-2 text-red-500 dark:text-red-400 pt-2" data-testid="password-match-error">
            <span className="material-symbols-outlined text-base">error</span>
            <p className="text-sm font-medium">{errors.match}</p>
          </div>
        )}
        
        <button
          type="submit"
          className="flex items-center justify-center font-bold text-white bg-primary rounded-full h-14 w-full mt-8 text-base shadow-lg shadow-primary/30 hover:bg-opacity-90 active:scale-[0.98] transition-all"
          data-testid="reset-password-submit-button"
        >
          Reset Password
        </button>
      </form>
    </>
  );
}
