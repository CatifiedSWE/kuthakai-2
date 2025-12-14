import React from 'react';
import { Transaction } from '../types';

interface TransactionItemProps {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const isEarning = transaction.type === 'earning';
  const amountColor = isEarning 
    ? 'text-green-600 dark:text-green-400' 
    : 'text-zinc-900 dark:text-white';
  
  const iconBgColor = isEarning
    ? 'bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400'
    : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200';
  
  const icon = isEarning ? 'south_west' : 'north_east';
  const amountPrefix = isEarning ? '+ ' : '- ';
  const amountClass = isEarning ? 'font-semibold' : 'font-medium';

  return (
    <div 
      className="flex items-center gap-4 bg-background-light dark:bg-background-dark px-4 min-h-[72px] py-2 justify-between"
      data-testid={`transaction-item-${transaction.id}`}
    >
      <div className="flex items-center gap-4">
        <div className={`flex items-center justify-center rounded-lg shrink-0 size-12 ${iconBgColor}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-zinc-900 dark:text-white text-base font-medium leading-normal line-clamp-1">
            {transaction.title}
          </p>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm font-normal leading-normal line-clamp-2">
            {transaction.description}
          </p>
        </div>
      </div>
      <div className="shrink-0">
        <p className={`${amountColor} text-base ${amountClass} leading-normal`}>
          {amountPrefix}₹{Math.abs(transaction.amount).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
}
