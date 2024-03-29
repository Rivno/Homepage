'use client';

import { useEffect, useState } from 'react';

export const Clock = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span>
      {time?.getHours().toString().padStart(2, '0') || '--'}:
      {time?.getMinutes().toString().padStart(2, '0') || '--'}
    </span>
  );
};
