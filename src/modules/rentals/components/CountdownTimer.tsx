'use client';

import React, { useEffect, useState } from 'react';
import { TimeRemaining } from '../types';

interface CountdownTimerProps {
  deadline: Date;
}

function calculateTimeRemaining(deadline: Date): TimeRemaining {
  const now = new Date();
  const difference = deadline.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(() => calculateTimeRemaining(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(deadline));
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  const timeUnits = [
    { value: timeRemaining.days, label: 'Days' },
    { value: timeRemaining.hours.toString().padStart(2, '0'), label: 'Hours' },
    { value: timeRemaining.minutes.toString().padStart(2, '0'), label: 'Minutes' },
  ];

  return (
    <div data-testid="countdown-timer">
      <p className="text-sm font-medium text-[#333333] dark:text-[#fbfdfc] mb-2">Return in:</p>
      <div className="flex gap-3">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex grow basis-0 flex-col items-stretch gap-2">
            <div className="flex h-14 grow items-center justify-center rounded-lg px-2 bg-[#f5f0f0] dark:bg-[#40302e]">
              <p className="text-primary text-2xl font-bold leading-tight tracking-[-0.015em]" data-testid={`timer-${unit.label.toLowerCase()}`}>
                {unit.value}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-[#8a6560] dark:text-[#e0e0e0] text-xs font-normal leading-normal">{unit.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
