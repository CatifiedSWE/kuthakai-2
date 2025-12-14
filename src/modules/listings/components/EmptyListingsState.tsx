interface EmptyListingsStateProps {
  onAddItem?: () => void;
}

export default function EmptyListingsState({ onAddItem }: EmptyListingsStateProps) {
  return (
    <div className="flex flex-col px-4 py-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          className="w-full max-w-[240px] rounded-xl"
          src="https://ouch-cdn2.icons8.com/X2awY_4T3c2C5k2f5An4cxvWJbUVLpD2t0SUogWcz5M/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzgx/LzU4Nzk1MTExLTc5/YjctNGQ2ZC1hZDAw/LWUzY2Q3NTA1YWEy/MC5zdmc.png"
          alt="Illustration of a person adding items to a box, symbolizing adding a new listing."
        />
        <div className="flex max-w-xs flex-col items-center gap-2">
          <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
            You haven't listed any items yet.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Tap the '+' button to get started!
          </p>
        </div>
      </div>
    </div>
  );
}
