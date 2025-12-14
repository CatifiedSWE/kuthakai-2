'use client';

import { useState } from 'react';
import {
  PhotoUploadSection,
  ItemDetailsForm,
  PriceInputField,
  StepProgressBar,
} from '../components';

interface ListItemScreenProps {
  onSubmit?: (data: any) => void;
  onClose?: () => void;
}

export default function ListItemScreen({ onSubmit, onClose }: ListItemScreenProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Cameras & Equipment');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [photos, setPhotos] = useState<FileList | null>(null);

  const handleSubmit = () => {
    const formData = {
      title,
      category,
      description,
      price: parseFloat(price),
      photos,
    };
    onSubmit?.(formData);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Top App Bar & Progress Bar */}
      <div className="sticky top-0 z-10 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button
            onClick={onClose}
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-text-light dark:text-text-dark hover:bg-neutral-100 dark:hover:bg-neutral-800"
            data-testid="close-button"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            List Your Item
          </h1>
          <div className="size-10 shrink-0"></div> {/* Spacer */}
        </div>
        <StepProgressBar currentStep={1} totalSteps={3} />
      </div>

      {/* Main Content */}
      <main className="flex-grow px-4 pb-28" data-testid="list-item-screen">
        {/* Section 1: Add Photos */}
        <PhotoUploadSection onUpload={setPhotos} />

        {/* Section 2: Item Details */}
        <ItemDetailsForm
          title={title}
          category={category}
          description={description}
          onTitleChange={setTitle}
          onCategoryChange={setCategory}
          onDescriptionChange={setDescription}
        />

        {/* Section 3: Set Your Price */}
        <PriceInputField price={price} onPriceChange={setPrice} />
      </main>

      {/* Fixed CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 w-full bg-gradient-to-t from-background-light dark:from-background-dark to-transparent p-4 pt-6">
        <button
          onClick={handleSubmit}
          className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
          data-testid="list-my-item-button"
        >
          <span className="truncate">List My Item</span>
        </button>
      </div>
    </div>
  );
}
