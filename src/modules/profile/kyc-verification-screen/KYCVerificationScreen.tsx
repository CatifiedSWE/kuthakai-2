'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { KYCVerificationData } from '../types';
import KYCProgressBar from '../components/KYCProgressBar';
import KYCSection from '../components/KYCSection';

interface KYCVerificationScreenProps {
  initialData: KYCVerificationData;
}

export default function KYCVerificationScreen({ initialData }: KYCVerificationScreenProps) {
  const router = useRouter();
  const [verificationData, setVerificationData] = useState(initialData);

  const handleBack = () => {
    router.push('/profile/settings');
  };

  const handleUpload = (documentId: string) => {
    console.log('Upload document:', documentId);
    // In a real app, this would open file picker or camera
    // For demo purposes, we'll simulate an upload
    setVerificationData((prev) => ({
      ...prev,
      documents: prev.documents.map((doc) =>
        doc.id === documentId
          ? {
              ...doc,
              status: 'uploaded',
              uploadedImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBl1LVbhkH9EPIpElVfWcmj5UvIjLoKVxbTseesDJ1i6vwZctyaVMs4LZfiQQAP7XhtOOUvEzRDrEy1zu0rcrocQ3SUMuVxbnzuOuTCPRrmZBih3_tQRdD_DcKPBO93Rng2oUnuxlYqAc3yEWQcYCABMiTJjvCU5p7qyd-OEyikbg5pkbz1FQzrqHUfnDHPe82UNeo7ReFMIaTfvoAX_Z2LLFWpJ3plQaS6VGtC4Yr4-MGgXTR_HUuhb6Gdvi1JgzlwPQ4N4y88_8t',
              uploadedAt: new Date().toISOString(),
            }
          : doc
      ),
    }));
  };

  const handleRemove = (documentId: string) => {
    console.log('Remove document:', documentId);
    setVerificationData((prev) => ({
      ...prev,
      documents: prev.documents.map((doc) =>
        doc.id === documentId
          ? {
              ...doc,
              status: 'pending',
              uploadedImage: undefined,
              uploadedAt: undefined,
            }
          : doc
      ),
    }));
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    console.log('Submitting verification...');
    // In a real app, this would submit to backend
    router.push('/profile');
  };

  // Check if all documents are uploaded
  const canSubmit = verificationData.documents.every(
    (doc) => doc.status === 'uploaded' || doc.status === 'verified'
  );

  // Group documents by section
  const aadhaarDocs = verificationData.documents.filter((doc) =>
    doc.type.startsWith('aadhaar')
  );
  const panDocs = verificationData.documents.filter((doc) => doc.type === 'pan');
  const selfieDocs = verificationData.documents.filter((doc) => doc.type === 'selfie');

  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display">
      {/* Top App Bar */}
      <div className="flex items-center bg-background-light dark:bg-background-dark p-4 sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800" data-testid="kyc-app-bar">
        <button
          onClick={handleBack}
          className="text-content-light dark:text-content-dark flex size-10 shrink-0 items-center justify-center hover:opacity-70 transition-opacity"
          aria-label="Go back"
          data-testid="back-button"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-content-light dark:text-content-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10">
          Identity Verification
        </h2>
      </div>

      {/* Progress Indicator */}
      <KYCProgressBar
        currentStep={verificationData.currentStep}
        totalSteps={verificationData.totalSteps}
        stepName={verificationData.stepName}
      />

      <main className="flex-1 px-4 py-6">
        {/* Aadhaar Card Section */}
        {aadhaarDocs.length > 0 && (
          <KYCSection
            title="Aadhaar Card"
            description="Upload clear images of the front and back."
            documents={aadhaarDocs}
            onUpload={handleUpload}
            onRemove={handleRemove}
          />
        )}

        {/* PAN Card Section */}
        {panDocs.length > 0 && (
          <KYCSection
            title="PAN Card"
            description="Upload a clear image of the front side."
            documents={panDocs}
            onUpload={handleUpload}
            onRemove={handleRemove}
          />
        )}

        {/* Live Selfie Section */}
        {selfieDocs.length > 0 && (
          <KYCSection
            title="Live Selfie"
            description="Please take a clear photo of your face. Do not wear glasses or a hat."
            documents={selfieDocs}
            onUpload={handleUpload}
            onRemove={handleRemove}
          />
        )}
      </main>

      {/* Bottom Action Bar */}
      <div className="sticky bottom-0 w-full bg-background-light dark:bg-background-dark p-4 border-t border-gray-200 dark:border-gray-800" data-testid="submit-footer">
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`w-full rounded-full bg-primary h-14 text-white font-bold text-lg flex items-center justify-center transition-all ${
            canSubmit
              ? 'opacity-100 hover:bg-primary/90 cursor-pointer'
              : 'opacity-50 cursor-not-allowed'
          }`}
          data-testid="submit-button"
        >
          Submit for Verification
        </button>
      </div>
    </div>
  );
}
