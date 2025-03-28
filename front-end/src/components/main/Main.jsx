"use client";

import { useEffect, useState } from "react";
import Stats from "./stats/Stats";
import styles from "./main.module.scss";
import clsx from "clsx";
import Image from "next/image";
import Button from "../ui/button/Button";
import Link from "next/link";
import Faq from "./faq/Faq";

const Main = () => {
  const questions = [
    {
      question: "Что это за проект?",
      answer:
        "Fcore Tracker - революция в сфере фриланса. Наш проект напаравлен на улучшение качества выполненных заказов исполнителями и повышение удовлетворённости клиента",
    },
    {
      question: "Какие проблемы он решает?",
      answer:
        "Наш проект, направлен на исправление всех существующих проблем фриланс-бирж. Например: отсутствие возможности зарегистрироваться как компания, подписать юридический договор, нет возможности назначить видеоконференцию с заказчиком - все эти проблемы решает Tracker",
    },
    {
      question: "Как планируете привлекать инвесторов?",
      answer: "Через новую инновационную площадку StartUp seed",
    },
    {
      question: "Кто занимается разработкой?",
      answer:
        "Разработкой занимается команда Fcore, данный проект является дочерним.",
    },
    {
      question: "Можно будет оплатить криптовалютой",
      answer:
        "Да, конечно! Но немного позже, на данный момент наша команда разрабатывает эквайринг KingPay, благодаря нему мы сможем принимать оплату в криптовалюте",
    },
    {
      question: "Будет ли подписка на сайте?",
      answer:
        "Да, будет. Мы планируем реализовать определенный функионал на сайте, который будет доступен за плату в месяц.",
    },
    {
      question: "Смогу ли я зайти с телефона?",
      answer: "Обязательно, мобильная версия нашего проекта почти готова",
    },
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const releaseDate = new Date(now.getFullYear(), 7, 15); // Август = 7 (0-11)

      if (now > releaseDate) {
        releaseDate.setFullYear(releaseDate.getFullYear() + 1);
      }

      const diff = releaseDate - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Разбиваем числа на цифры
  const daysStr = String(timeLeft.days).padStart(
    timeLeft.days >= 100 ? 3 : 2,
    "0"
  );
  const hoursStr = String(timeLeft.hours).padStart(2, "0");
  const minutesStr = String(timeLeft.minutes).padStart(2, "0");
  const secondsStr = String(timeLeft.seconds).padStart(2, "0");

  return (
    <div className={styles.main}>
      <section className={styles.main__section}>
        <div className={styles.right__section}>
          <div className={styles.title__wrap}>
            <h1>
              Fcore<span>Tracker</span>
            </h1>
            <div className={styles.live}></div>
          </div>

          <h2>
            <span>Удобный</span> сервис для отслеживания проектов
          </h2>

          <p className={styles.to__start}>До запуска</p>
          <div className={styles.upload__time}>
            {/* Дни (2 или 3 клетки) */}
            <div className={styles.time__wrap}>
              {daysStr.split("").map((digit, i) => (
                <div key={`day-${i}`} className={styles.upload__cell}>
                  {digit}
                </div>
              ))}
              <p className={styles.days__title}>Дней</p>
            </div>

            {/* Часы (2 клетки) */}
            <div className={styles.time__wrap}>
              {hoursStr.split("").map((digit, i) => (
                <div key={`hour-${i}`} className={styles.upload__cell}>
                  {digit}
                </div>
              ))}
              <p className={styles.days__title}>Часов</p>
            </div>

            {/* Минуты (2 клетки) */}
            <div className={styles.time__wrap}>
              {minutesStr.split("").map((digit, i) => (
                <div key={`minute-${i}`} className={styles.upload__cell}>
                  {digit}
                </div>
              ))}
              <p className={styles.days__title}>Минут</p>
            </div>

            {/* Секунды (2 клетки) */}
          </div>

          <div className={styles.project__info}>
            <div className={styles.info}>Практичность</div>
            <div className={styles.info}>Безопасность</div>
            <div className={styles.info}>Удобство</div>
          </div>
        </div>
        <div className={styles.main__banner}>
          <Image
            src="./icons/bg_s_part.png"
            width={900}
            height={700}
            alt="banner"
            className={styles.bg__part__s}
          />
          <Image
            src="./icons/bg_part.png"
            width={600}
            height={600}
            alt="banner"
            className={styles.bg__part}
          />
        </div>
      </section>
      <Image
        src="./icons/star_prev.svg"
        width={300}
        height={300}
        className={styles.star}
      />
      <section className={styles.stats}>
        <Stats />
      </section>
      <h2 className={styles.main__title}>Наша команда</h2>
      <div className={styles.team}>
        <div className={clsx(styles.team__block, styles.value__second)}>
          <div className={styles.user__info}>
            <Image
              src="./logotype.jpg"
              width={60}
              height={60}
              alt="user"
              className={styles.user__logo}
            />
            <p className={styles.user__name}>Николаев Андрей</p>
          </div>
          <p className={styles.user__description}>
            Основатель Fcore <br /> Tech-lead Front-end developer <br /> Стаж 3
            года
          </p>

          <div className={styles.git__btn}>
            <Link href="https://github.com/FcoreTeam" className={styles.link}>
              GitHub
            </Link>
          </div>
        </div>
        <div className={styles.team__block}>
          {" "}
          <div className={styles.user__info}>
            <Image
              src="./maskots/maskotSecond.png"
              width={60}
              height={60}
              alt="user"
              className={styles.user__logo}
            />
            <p className={clsx(styles.user__name, styles.second__title)}>
              Краснов Богдан
            </p>
          </div>
          <p
            className={clsx(
              styles.user__description,
              styles.second__description
            )}
          >
            Со-основатель Fcore <br /> Middle+ back-end developer <br /> Стаж 4
            года
          </p>
        </div>
        <div className={clsx(styles.team__block, styles.value__second)}>
          {" "}
          <div className={styles.user__info}>
            <Image
              src="./logotype.jpg"
              width={60}
              height={60}
              alt="user"
              className={styles.user__logo}
            />
            <p className={styles.user__name}>Тимофей Кузнецов</p>
          </div>
          <p className={styles.user__description}>
            Арт-директор <br /> Стаж 5 лет
          </p>
        </div>
        <div className={clsx(styles.team__block, styles.value__second)}>
          {" "}
          <div className={styles.user__info}>
            <Image
              src="./team/Altun.jpg"
              width={60}
              height={60}
              alt="user"
              className={styles.user__logo}
            />
            <p className={styles.user__name}>Гасымзаде Алтун</p>
          </div>
          <p className={styles.user__description}>
            Cyber-security engineer <br /> Стаж 4.5 года
          </p>
        </div>
        <div className={styles.team__block}>
          {" "}
          <div className={styles.user__info}>
            <Image
              src="./team/Dema.jpg"
              width={60}
              height={60}
              alt="user"
              className={styles.user__logo}
            />
            <p className={clsx(styles.user__name, styles.second__title)}>
              Пономарев Демьян
            </p>
          </div>
          <p
            className={clsx(
              styles.user__description,
              styles.second__description
            )}
          >
            Middle back-end developer <br /> Стаж 3 года
          </p>
        </div>
        <div className={styles.team__block}>
          {" "}
          <div className={styles.user__info}>
            <Image
              src="./team/Anvar.jpg"
              width={60}
              height={60}
              alt="user"
              className={styles.user__logo}
            />
            <p className={clsx(styles.user__name, styles.second__title)}>
              Анвар
            </p>
          </div>
          <p
            className={clsx(
              styles.user__description,
              styles.second__description
            )}
          >
            Middle Front-end developer <br /> Стаж 2.5 года
          </p>
        </div>
      </div>
      <h2 className={styles.main__subtitle}>FaQ</h2>
      <div className={styles.questions}>
        <Faq questions={questions} />
      </div>
      <h2 className={styles.main__subtitle}>Социальные сети</h2>
      <div className={styles.contacts}>
        {/* <Image className={styles.contact__logo} src={null} /> */}
      </div>
    </div>
  );
};

export default Main;
