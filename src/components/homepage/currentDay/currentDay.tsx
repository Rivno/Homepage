'use client';

import { useEffect, useState } from 'react';

export const CurrentDay = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!date) {
    <div></div>;
  }

  return (
    <div>
      {date?.toLocaleDateString(undefined, {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
      })}
    </div>
  );
};
