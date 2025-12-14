'use client';

import { useState } from 'react';
import { PhotoEvidence } from '../damage-claim-types';

interface PhotoGalleryProps {
  photos: PhotoEvidence[];
  onPhotosChange: (photos: PhotoEvidence[]) => void;
  maxPhotos?: number;
  error?: string;
}

export default function PhotoGallery({
  photos,
  onPhotosChange,
  maxPhotos = 6,
  error,
}: PhotoGalleryProps) {
  const [showRemoveConfirm, setShowRemoveConfirm] = useState<string | null>(null);

  const handleRemovePhoto = (photoId: string) => {
    const updatedPhotos = photos.filter((photo) => photo.id !== photoId);
    onPhotosChange(updatedPhotos);
    setShowRemoveConfirm(null);
  };

  const handleAddPhoto = () => {
    // Simulate photo upload
    const newPhoto: PhotoEvidence = {
      id: `photo-${Date.now()}`,
      url: `https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=400&fit=crop`,
      alt: 'Uploaded damage evidence photo',
    };
    onPhotosChange([...photos, newPhoto]);
  };

  return (
    <section className="mb-24">
      {/* Remove Confirmation Toast */}
      {showRemoveConfirm && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-zinc-800 px-6 py-3 rounded-lg shadow-lg animate-slide-down">
          <div className="flex items-center gap-2">
            <span className="font-medium">Photo removed</span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h2 className="px-0 pb-2 pt-4 text-lg font-bold leading-tight tracking-tight text-zinc-800 dark:text-zinc-200">
          Photographic Evidence
        </h2>
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {photos.length}/{maxPhotos}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {/* Uploaded Images */}
        {photos.map((photo) => (
          <div key={photo.id} className="relative aspect-square" data-testid={`photo-${photo.id}`}>
            <img
              className="h-full w-full rounded-xl object-cover"
              src={photo.url}
              alt={photo.alt}
            />
            <button
              onClick={() => {
                handleRemovePhoto(photo.id);
                setShowRemoveConfirm(photo.id);
                setTimeout(() => setShowRemoveConfirm(null), 2000);
              }}
              data-testid={`remove-photo-${photo.id}`}
              className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-800 hover:scale-110 transition-transform active:scale-95"
            >
              <span className="material-symbols-outlined !text-base">close</span>
            </button>
          </div>
        ))}

        {/* Add Photos Button */}
        {photos.length < maxPhotos && (
          <button
            onClick={handleAddPhoto}
            data-testid="add-photo-button"
            className={`flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border-2 border-dashed transition-all active:scale-95 ${
              error
                ? 'border-red-500 text-red-500 hover:border-red-600 hover:text-red-600'
                : 'border-zinc-300 text-zinc-500 hover:border-primary hover:text-primary dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-primary/80 dark:hover:text-primary/80'
            }`}
          >
            <span className="material-symbols-outlined !text-3xl">add_photo_alternate</span>
            <span className="text-sm font-medium">Add Photos</span>
          </button>
        )}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </section>
  );
}
