'use client';

import { KYCDocument } from '../types';

interface DocumentUploadCardProps {
  document: KYCDocument;
  onUpload?: (documentId: string) => void;
  onRemove?: (documentId: string) => void;
}

export default function DocumentUploadCard({ document, onUpload, onRemove }: DocumentUploadCardProps) {
  const isUploaded = document.status === 'uploaded' || document.status === 'verified';
  const isSuccess = document.status === 'uploaded';

  const handleClick = () => {
    if (isUploaded && onRemove) {
      onRemove(document.id);
    } else if (onUpload) {
      onUpload(document.id);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-4 p-4 rounded-lg min-h-[72px] justify-between border w-full text-left transition-colors ${
        isSuccess
          ? 'bg-success/10 dark:bg-success/20 border-success/30 dark:border-success/50'
          : 'bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
      }`}
      data-testid={`document-upload-${document.id}`}
    >
      <div className="flex items-center gap-4">
        {isUploaded && document.uploadedImage ? (
          <div className="shrink-0 size-12">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={document.uploadedImage}
              alt={document.title}
              data-testid="uploaded-document-thumbnail"
            />
          </div>
        ) : (
          <div className="text-primary flex items-center justify-center rounded-lg bg-primary/20 shrink-0 size-12">
            <span className="material-symbols-outlined">{document.icon}</span>
          </div>
        )}
        <div className="flex flex-col justify-center">
          <p className="text-content-light dark:text-content-dark text-base font-medium leading-normal line-clamp-1" data-testid="document-title">
            {isUploaded ? document.title.replace('Upload', '') + ' Uploaded' : document.title}
          </p>
          <p
            className={`text-sm font-normal leading-normal line-clamp-2 ${
              isSuccess
                ? 'text-success font-medium'
                : 'text-subtle-light dark:text-subtle-dark'
            }`}
            data-testid="document-description"
          >
            {isSuccess ? 'Looks good!' : document.description}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="text-content-light dark:text-content-dark flex size-7 items-center justify-center">
          <span className="material-symbols-outlined">
            {isUploaded ? 'cancel' : 'chevron_right'}
          </span>
        </div>
      </div>
    </button>
  );
}
