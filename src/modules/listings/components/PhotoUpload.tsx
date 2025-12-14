'use client';

import React, { useState } from 'react';

interface PhotoUploadProps {
  onPhotosChange?: (photos: File[]) => void;
}

export default function PhotoUpload({ onPhotosChange }: PhotoUploadProps) {
  const [photos, setPhotos] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files);
      setPhotos([...photos, ...newPhotos]);
      onPhotosChange?.([...photos, ...newPhotos]);
    }
  };

  return (
    <div className="flex flex-col" data-testid="photo-upload">
      <label htmlFor="photo-input" className="cursor-pointer">
        <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-neutral-200 dark:border-neutral-900/50 px-6 py-10">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>
              add_a_photo
            </span>
          </div>
          <div className="flex max-w-[480px] flex-col items-center gap-1">
            <p className="text-neutral-900 dark:text-neutral-100 text-base font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
              Tap here to add photos
            </p>
            {photos.length > 0 && (
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {photos.length} photo{photos.length !== 1 ? 's' : ''} selected
              </p>
            )}
          </div>
        </div>
      </label>
      <input
        id="photo-input"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        className="hidden"
        data-testid="photo-input"
      />
    </div>
  );
}
