import { Transaction } from '../types';

interface TransactionItemProps {
  transaction: Transaction;
}

export default function TransactionItem({ transaction }: TransactionItemProps) {
  const amountColor = transaction.amount >= 0 ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500';
  const amountSign = transaction.amount >= 0 ? '+ ' : '- ';

  return (
    <div
      className="flex items-center justify-between rounded-lg bg-surface dark:bg-surface-dark p-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
      data-testid={`transaction-${transaction.id}`}
    >
      <div className="flex flex-col">
        <p className="text-base font-medium text-text-primary dark:text-gray-100">
          Rental from {transaction.customerName}
        </p>
        <p className="text-sm text-text-secondary dark:text-gray-400">{transaction.date}</p>
      </div>
      <p className={`text-base font-bold ${amountColor}`}>
        {amountSign}₹{Math.abs(transaction.amount).toLocaleString()}
      </p>
    </div>
  );
}
