'use client';

import { KYCDocument } from '../types';
import DocumentUploadCard from './DocumentUploadCard';

interface KYCSectionProps {
  title: string;
  description: string;
  documents: KYCDocument[];
  onUpload?: (documentId: string) => void;
  onRemove?: (documentId: string) => void;
}

export default function KYCSection({ title, description, documents, onUpload, onRemove }: KYCSectionProps) {
  return (
    <div className="mb-8" data-testid="kyc-section">
      <h1 className="text-content-light dark:text-content-dark tracking-light text-[28px] font-bold leading-tight" data-testid="section-title">
        {title}
      </h1>
      <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal pt-1" data-testid="section-description">
        {description}
      </p>
      <div className="mt-4 space-y-4">
        {documents.map((document) => (
          <DocumentUploadCard
            key={document.id}
            document={document}
            onUpload={onUpload}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}
