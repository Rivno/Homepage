'use client';
import { useEffect, useMemo, useState } from 'react';

import styles from './countdown.module.css';

function getClockDate(date: Date): {
  years?: number;
  months?: number;
  days?: number;
  hours?: number;
  minutes: number;
  seconds: number;
} {
  const tempDate = {
    years: date.getFullYear() - 1970,
    months: date.getMonth(),
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };

  let clockDate: {
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  } = {};

  if (tempDate.years > 0) {
    clockDate.years = tempDate.years;
  }

  if (tempDate.months > 0 || (tempDate.months <= 0 && tempDate.years > 0)) {
    clockDate.months = tempDate.months;
  }

  if (tempDate.days > 0 || (tempDate.days <= 0 && tempDate.months > 0)) {
    clockDate.days = tempDate.days;
  }

  if (tempDate.hours > 0 || (tempDate.hours <= 0 && tempDate.days > 0)) {
    clockDate.hours = tempDate.hours;
  }

  clockDate.minutes = tempDate.minutes;
  clockDate.seconds = tempDate.seconds;

  // @ts-ignore
  return clockDate;
}

export function CountdownClock({ date }: { date: string }) {
  const [countData, setCountData] = useState<Record<string, number>>({});
  const currentDate = useMemo(() => new Date(date), []);

  useEffect(() => {
    let clockDate = new Date(currentDate.getTime() - new Date().getTime());
    setCountData(getClockDate(clockDate));

    const interval = setInterval(() => {
      clockDate = new Date(currentDate.getTime() - new Date().getTime());
      setCountData(getClockDate(clockDate));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.clock}>
      {Object.keys(countData).map((key) => {
        let data = countData[key];

        if (data < 0) {
          data = 0;
        }

        return (
          <div key={key} className={styles.timer}>
            <div className={styles.data}>
              {countData[key].toString().padStart(2, '0')}
            </div>

            <div className={styles.unit}>{key}</div>
          </div>
        );
      })}
    </div>
  );
}
