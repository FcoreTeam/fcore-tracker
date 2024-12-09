import clsx from "clsx";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

import styles from "./order.module.scss";

const Order = ({
  orderName,
  orderTrackCode,
  orderStart,
  orderFinish,
  orderPrice,
  orderID,
}) => {
  const formattedPrice = orderPrice.toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const [deadline, setDeadline] = useState(
    orderFinish - Math.floor(Date.now() / 1000)
  );
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000);
      const remainingTime = orderFinish - currentTime;
      setDeadline(remainingTime > 0 ? remainingTime : 0);
      if (remainingTime <= 0) {
        setIsExpired(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [orderFinish]);

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
    <div className={styles.order}>
      <Link href={`/controll/${orderID}`} className={styles.order__controll}>
        <div className={styles.controll__link}>Управлять</div>
      </Link>
      <div className={styles.order__info}>
        <p className={styles.order__name}>{orderName}</p>
        <p className={styles.order__trackcode}>Трек-код: {orderTrackCode}</p>
      </div>
      <div className={styles.order__dev__info}>
        <div className={styles.order__price}>{formattedPrice} ₽</div>
        <p
          className={clsx(
            styles.order__deadline,
            isExpired ? styles.expired : null
          )}
        >
          {timeRemaining.days === "00" &&
          timeRemaining.hours === "00" &&
          timeRemaining.minutes === "00"
            ? "Просрочен"
            : `${timeRemaining.days} д ${timeRemaining.hours} ч ${timeRemaining.minutes} м`}
        </p>
      </div>
    </div>
  );
};

export default Order;
