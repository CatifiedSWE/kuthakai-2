'use client';

import { useState } from 'react';
import {
  DashboardAppBar,
  SegmentedButton,
  BarChart,
  TransactionItem,
} from '../components';
import { EarningsSummaryData, EarningsPeriod } from '../types';

interface EarningsSummaryScreenProps {
  data: EarningsSummaryData;
}

export default function EarningsSummaryScreen({ data }: EarningsSummaryScreenProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<EarningsPeriod>('monthly');

  const periodOptions = [
    { label: 'Weekly', value: 'weekly' as EarningsPeriod },
    { label: 'Monthly', value: 'monthly' as EarningsPeriod },
    { label: 'All Time', value: 'alltime' as EarningsPeriod },
  ];

  const handlePeriodChange = (period: EarningsPeriod) => {
    setSelectedPeriod(period);
    console.log('Period changed to:', period);
    // Here you would typically fetch data for the selected period
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden">
      {/* Top App Bar */}
      <DashboardAppBar
        userName=""
        userAvatar=""
        showBackButton={true}
        title="Earnings Summary"
      />

      {/* Total Earnings Label */}
      <p className="text-text-secondary dark:text-gray-400 text-base font-normal leading-normal pb-0 pt-4 px-4 text-center">
        Total Earnings
      </p>

      {/* Total Earnings Amount */}
      <h1 className="text-text-primary dark:text-gray-100 tracking-tight text-[40px] font-bold leading-tight px-4 text-center pb-4 pt-1">
        ₹{data.totalEarnings.toLocaleString()}
      </h1>

      {/* Segmented Buttons */}
      <SegmentedButton
        options={periodOptions}
        defaultValue="monthly"
        onChange={handlePeriodChange}
      />

      {/* Bar Chart */}
      <BarChart data={data.weeklyData} />

      {/* Transaction History Section */}
      <div className="px-4 pt-8 pb-4">
        <h3 className="text-lg font-bold text-text-primary dark:text-gray-100">
          Transaction History
        </h3>
      </div>

      {/* Transaction List */}
      <div className="flex flex-col gap-2 px-4 pb-8">
        {data.transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </div>
    </div>
  );
}
