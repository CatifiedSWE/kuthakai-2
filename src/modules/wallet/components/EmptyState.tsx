import React from 'react';

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export default function EmptyState({ 
  title = 'No Transactions Yet',
  description = 'Once you start renting or lending, all your transactions will appear here.'
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 mt-10" data-testid="empty-state">
      <div className="flex items-center justify-center size-24 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-6">
        <span className="material-symbols-outlined text-4xl text-zinc-500 dark:text-zinc-400">receipt_long</span>
      </div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400 max-w-xs">{description}</p>
    </div>
  );
}
