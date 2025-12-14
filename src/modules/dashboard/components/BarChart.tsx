import { WeeklyEarnings } from '../types';

interface BarChartProps {
  data: WeeklyEarnings[];
}

export default function BarChart({ data }: BarChartProps) {
  const maxAmount = Math.max(...data.map((item) => item.amount));
  const currentWeekIndex = data.findIndex((item) => item.percentage >= 80); // Highest percentage is current week

  return (
    <div className="flex flex-wrap gap-4 px-4 pt-6 pb-2" data-testid="bar-chart">
      <div className="flex w-full flex-1 flex-col gap-2">
        <div className="grid min-h-[180px] grid-flow-col gap-4 grid-rows-[1fr_auto] items-end justify-items-center px-3 pt-4 border-t border-b border-border-light dark:border-border-dark">
          {data.map((item, index) => {
            const isCurrentWeek = index === currentWeekIndex;
            return (
              <div key={item.week} className="flex flex-col w-full h-full items-center justify-end">
                <div
                  className={`rounded-t-lg w-3/4 ${
                    isCurrentWeek
                      ? 'bg-primary shadow-[0_4px_12px_rgba(248,107,89,0.4)]'
                      : 'bg-primary/20 dark:bg-primary/40'
                  }`}
                  style={{ height: `${item.percentage}%` }}
                  data-testid={`bar-${item.week}`}
                  aria-label={`${item.week}: ₹${item.amount.toLocaleString()}`}
                />
                <p
                  className={`text-xs font-medium leading-normal pt-2 ${
                    isCurrentWeek
                      ? 'text-text-primary dark:text-gray-100 font-bold'
                      : 'text-text-secondary dark:text-gray-400'
                  }`}
                >
                  {item.week}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
