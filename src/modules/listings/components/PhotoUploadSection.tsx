interface PhotoUploadSectionProps {
  onUpload?: (files: FileList | null) => void;
}

export default function PhotoUploadSection({ onUpload }: PhotoUploadSectionProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpload?.(e.target.files);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-2 pt-5">
        Add Photos
      </h2>
      <p className="text-base font-normal leading-normal pb-4 text-text-light/70 dark:text-text-dark/70">
        Add up to 5 photos. The first photo will be the cover.
      </p>
      <label
        htmlFor="photo-upload"
        className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-border-light dark:border-border-dark px-6 py-10 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors"
        data-testid="photo-upload-section"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined text-4xl text-text-light/50 dark:text-text-dark/50">
            add_a_photo
          </span>
          <p className="text-lg font-bold leading-tight tracking-[-0.015em] text-center">
            Tap to add photos
          </p>
          <p className="text-sm font-normal leading-normal text-center text-text-light/70 dark:text-text-dark/70">
            Upload a photo of your item
          </p>
        </div>
        <input
          id="photo-upload"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
}
