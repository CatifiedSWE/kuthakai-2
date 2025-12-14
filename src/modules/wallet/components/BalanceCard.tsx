import React from 'react';
import { WalletBalance } from '../types';

interface BalanceCardProps {
  balance: WalletBalance;
  onWithdraw?: () => void;
}

export default function BalanceCard({ balance, onWithdraw }: BalanceCardProps) {
  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-xl bg-white dark:bg-zinc-800/50 shadow-sm">
        <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-6">
          <p className="text-zinc-800 dark:text-zinc-300 text-base font-medium leading-tight tracking-[-0.015em]">
            Current Balance
          </p>
          <div className="flex items-end gap-3 justify-between">
            <p className="text-zinc-900 dark:text-white text-4xl font-bold leading-none">
              {balance.currency}{balance.current.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
            <button
              onClick={onWithdraw}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-wide shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
              data-testid="withdraw-button"
            >
              <span className="truncate">Withdraw</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
