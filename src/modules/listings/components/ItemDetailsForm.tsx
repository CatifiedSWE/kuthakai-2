interface ItemDetailsFormProps {
  title?: string;
  category?: string;
  description?: string;
  onTitleChange?: (value: string) => void;
  onCategoryChange?: (value: string) => void;
  onDescriptionChange?: (value: string) => void;
}

export default function ItemDetailsForm({
  title = '',
  category = 'Cameras & Equipment',
  description = '',
  onTitleChange,
  onCategoryChange,
  onDescriptionChange,
}: ItemDetailsFormProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 pt-5">
        Item Details
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="item-title">
            Item Title
          </label>
          <input
            className="w-full rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 px-3 py-2"
            id="item-title"
            placeholder="e.g. Sony Alpha a7 III Camera"
            type="text"
            value={title}
            onChange={(e) => onTitleChange?.(e.target.value)}
            data-testid="item-title-input"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="category">
            Select a Category
          </label>
          <div className="relative">
            <select
              className="w-full appearance-none rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary px-3 py-2 pr-10"
              id="category"
              value={category}
              onChange={(e) => onCategoryChange?.(e.target.value)}
              data-testid="category-select"
            >
              <option>Cameras & Equipment</option>
              <option>Drones</option>
              <option>Outdoor Gear</option>
              <option>Party & Events</option>
            </select>
            <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-light/50 dark:text-text-dark/50">
              expand_more
            </span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" htmlFor="description">
            Description
          </label>
          <textarea
            className="w-full rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 px-3 py-2"
            id="description"
            placeholder="Describe your item, its condition, and any accessories included..."
            rows={4}
            value={description}
            onChange={(e) => onDescriptionChange?.(e.target.value)}
            data-testid="description-input"
          />
        </div>
      </div>
    </div>
  );
}
