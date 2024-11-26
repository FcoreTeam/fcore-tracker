"use client";

import { useSelector } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import TimeCell from "./time-cell/Time-cell";
import styles from "./dev-time.module.scss";

const DevTime = () => {
  const { orderFinish } = useSelector((state) => state.tracker.orderInfo);
  const [deadline, setDeadline] = useState(orderFinish - Math.floor(Date.now() / 1000));

  useEffect(() => {
    const interval = setInterval(() => {
      setDeadline(orderFinish - Math.floor(Date.now() / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [orderFinish]);

  const timeRemaining = useMemo(() => {
    const secondsInMinute = 60;
    const secondsInHour = secondsInMinute * 60;
    const secondsInDay = secondsInHour * 24;

    const days = Math.floor(deadline / secondsInDay);
    const hours = Math.floor((deadline % secondsInDay) / secondsInHour);
    const minutes = Math.floor((deadline % secondsInHour) / secondsInMinute);

    return {
      days,
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
    };
  }, [deadline]);

  return (
    <div className={styles.dev__time}>
      <p className={styles.time__title}>Времени осталось</p>
      <section className={styles.time}>
        <TimeCell timeNumber={0} />
        <TimeCell timeNumber={timeRemaining.days} />
        <p className={styles.del}>:</p>
        <TimeCell timeNumber={parseInt(timeRemaining.hours[0])} />
        <TimeCell timeNumber={parseInt(timeRemaining.hours[1])} />
        <p className={styles.del}>:</p>
        <TimeCell timeNumber={parseInt(timeRemaining.minutes[0])} />
        <TimeCell timeNumber={parseInt(timeRemaining.minutes[1])} />
        <p className={styles.time__left}>дней</p>
      </section>
    </div>
  );
};

export default DevTime;