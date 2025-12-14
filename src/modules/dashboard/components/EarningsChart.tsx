import { EarningsData } from '../types';

interface EarningsChartProps {
  data: EarningsData;
}

export default function EarningsChart({ data }: EarningsChartProps) {
  const percentageColor = data.percentageChange >= 0 ? 'text-[#078809]' : 'text-red-600';
  const percentageSign = data.percentageChange >= 0 ? '+' : '';

  return (
    <div className="flex flex-wrap gap-4 py-6">
      <div 
        className="flex min-w-72 flex-1 flex-col gap-2 p-6 bg-content-light dark:bg-content-dark rounded-lg"
        data-testid="earnings-chart"
      >
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-base font-medium leading-normal">
          This Month's Earnings
        </p>
        <p className="text-primary tracking-light text-[32px] font-bold leading-tight truncate">
          ₹{data.currentMonth.toLocaleString()}
        </p>
        <div className="flex gap-1 items-center">
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm font-normal leading-normal">
            vs last month
          </p>
          <p className={`${percentageColor} text-sm font-medium leading-normal`}>
            {percentageSign}{data.percentageChange}%
          </p>
        </div>
        <div className="flex min-h-[120px] flex-1 flex-col gap-8 pt-4">
          <svg
            fill="none"
            height="118"
            preserveAspectRatio="none"
            viewBox="-3 0 478 120"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Earnings trend chart"
          >
            <path
              d="M0 87.2C18.1538 87.2 18.1538 16.8 36.3077 16.8C54.4615 16.8 54.4615 32.8 72.6154 32.8C90.7692 32.8 90.7692 74.4 108.923 74.4C127.077 74.4 127.077 26.4 145.231 26.4C163.385 26.4 163.385 80.8 181.538 80.8C199.692 80.8 199.692 48.8 217.846 48.8C236 48.8 236 36 254.154 36C272.308 36 272.308 96.8 290.462 96.8C308.615 96.8 308.615 119.2 326.769 119.2C344.923 119.2 344.923 0.800003 363.077 0.800003C381.231 0.800003 381.231 64.8 399.385 64.8C417.538 64.8 417.538 103.2 435.692 103.2C453.846 103.2 453.846 20 472 20V119.2H326.769H0V87.2Z"
              fill="url(#paint0_linear_1131_5935)"
            />
            <path
              d="M0 87.2C18.1538 87.2 18.1538 16.8 36.3077 16.8C54.4615 16.8 54.4615 32.8 72.6154 32.8C90.7692 32.8 90.7692 74.4 108.923 74.4C127.077 74.4 127.077 26.4 145.231 26.4C163.385 26.4 163.385 80.8 181.538 80.8C199.692 80.8 199.692 48.8 217.846 48.8C236 48.8 236 36 254.154 36C272.308 36 272.308 96.8 290.462 96.8C308.615 96.8 308.615 119.2 326.769 119.2C344.923 119.2 344.923 0.800003 363.077 0.800003C381.231 0.800003 381.231 64.8 399.385 64.8C417.538 64.8 417.538 103.2 435.692 103.2C453.846 103.2 453.846 20 472 20"
              stroke="#f86b59"
              strokeLinecap="round"
              strokeWidth="3"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1131_5935"
                x1="236"
                x2="236"
                y1="0.800003"
                y2="119.2"
              >
                <stop stopColor="#f86b59" stopOpacity="0.2" />
                <stop offset="1" stopColor="#f86b59" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
