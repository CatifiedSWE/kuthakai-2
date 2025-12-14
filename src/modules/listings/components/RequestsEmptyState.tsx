import React from 'react';

export default function RequestsEmptyState() {
  return (
    <div
      className="flex flex-col items-center justify-center text-center p-8 mt-8"
      data-testid="requests-empty-state"
    >
      <span className="material-symbols-outlined text-6xl text-text-secondary-light dark:text-text-secondary-dark/50 mb-4">
        task_alt
      </span>
      <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
        All Caught Up!
      </h2>
      <p className="text-text-secondary-light dark:text-text-secondary-dark mt-2 max-w-xs">
        You have no new rental requests at the moment.
      </p>
    </div>
  );
}
