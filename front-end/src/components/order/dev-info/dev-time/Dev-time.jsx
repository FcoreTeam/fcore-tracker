"use client";

import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import TimeCell from "./time-cell/Time-cell";
import styles from "./dev-time.module.scss";

const DevTime = ({ isOrderActivated }) => {
  const { orderStart, orderFinish } = useSelector(
    (state) => state.tracker.orderInfo
  );
  const [deadline, setDeadline] = useState(
    orderFinish - Math.floor(Date.now() / 1000)
  );

  if (isOrderActivated) {
    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = Math.floor(Date.now() / 1000);
        const remainingTime = orderFinish - currentTime;
        setDeadline(remainingTime > 0 ? remainingTime : 0);
      }, 1000);

      return () => clearInterval(interval);
    }, [orderFinish]);
  }

  const calculateRemainingPercentage = (orderStart, orderFinish) => {
    const currentTime = Math.floor(Date.now() / 1000);
    const totalDuration = orderFinish - orderStart;
    if (totalDuration <= 0) return 0;
    const remainingTime = orderFinish - currentTime;

    const remainingPercentage = (remainingTime / totalDuration) * 100;
    return Math.max(0, Math.min(remainingPercentage, 100));
  };
  const remainingPercentage = calculateRemainingPercentage(
    orderStart,
    orderFinish
  );

  const timeRemaining = useMemo(() => {
    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;
    const secondsInDay = secondsInHour * 24;

    const days = Math.floor(deadline / secondsInDay);
    const hours = Math.floor((deadline % secondsInDay) / secondsInHour);
    const minutes = Math.floor((deadline % secondsInHour) / secondsInMinute);
    const seconds = deadline % secondsInMinute;

    return {
      days: String(days).padStart(2, "0"),
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  }, [deadline]);
  return (
    <div className={styles.dev__time}>
      <p className={styles.time__title}>Времени осталось</p>
      <section className={styles.time}>
        {deadline < 86400 ? (
          <>
            <TimeCell
              timeNumber={parseInt(timeRemaining.hours[0])}
              deadline={remainingPercentage}
            />
            <TimeCell
              timeNumber={parseInt(timeRemaining.hours[1])}
              deadline={remainingPercentage}
            />
            <p className={styles.del}>:</p>
            <TimeCell
              timeNumber={parseInt(timeRemaining.minutes[0])}
              deadline={remainingPercentage}
            />
            <TimeCell
              timeNumber={parseInt(timeRemaining.minutes[1])}
              deadline={remainingPercentage}
            />
            <p className={styles.del}>:</p>
            <TimeCell
              timeNumber={parseInt(timeRemaining.seconds[0])}
              deadline={remainingPercentage}
            />
            <TimeCell
              timeNumber={parseInt(timeRemaining.seconds[1])}
              deadline={remainingPercentage}
            />
            <p className={styles.time__left}>часов</p>
          </>
        ) : (
          <>
            <TimeCell
              timeNumber={parseInt(timeRemaining.days[0])}
              deadline={remainingPercentage}
            />
            <TimeCell
              timeNumber={parseInt(timeRemaining.days[1])}
              deadline={remainingPercentage}
            />
            <p className={styles.del}>:</p>
            <TimeCell
              timeNumber={parseInt(timeRemaining.hours[0])}
              deadline={remainingPercentage}
            />
            <TimeCell
              timeNumber={parseInt(timeRemaining.hours[1])}
              deadline={remainingPercentage}
            />
            <p className={styles.del}>:</p>
            <TimeCell
              timeNumber={parseInt(timeRemaining.minutes[0])}
              deadline={remainingPercentage}
            />
            <TimeCell
              timeNumber={parseInt(timeRemaining.minutes[1])}
              deadline={remainingPercentage}
            />
            <p className={styles.time__left}>дней</p>
          </>
        )}
      </section>
    </div>
  );
};

export default DevTime;
