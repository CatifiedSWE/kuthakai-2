interface PriceInputFieldProps {
  price?: string;
  onPriceChange?: (value: string) => void;
}

export default function PriceInputField({ price = '', onPriceChange }: PriceInputFieldProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-4 pt-5">
        Set Your Price
      </h2>
      <div>
        <label className="block text-sm font-medium mb-1.5" htmlFor="price">
          Price per day (₹)
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-light/50 dark:text-text-dark/50">
            ₹
          </span>
          <input
            className="w-full rounded border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark pl-7 focus:border-primary focus:ring-primary placeholder:text-text-light/50 dark:placeholder:text-text-dark/50 px-3 py-2"
            id="price"
            placeholder="0.00"
            type="number"
            value={price}
            onChange={(e) => onPriceChange?.(e.target.value)}
            data-testid="price-input"
          />
        </div>
      </div>
    </div>
  );
}
