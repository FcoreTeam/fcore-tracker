import PersonalController from "./personal-controller/Personal-controller";

import styles from "./personal-nav.module.scss";

const PersonalNav = ({ setNav, currentNav }) => {
  const changeNav = (nav) => {
    setNav(nav);
  };

  return (
    <nav className={styles.personal__navigation}>
      <PersonalController
        controllerName="Отзывы"
        onClick={() => {
          changeNav("reviews");
        }}
        activeClass={currentNav === "reviews" ? true : false}
        controllerImg="/icons/reviewnav.svg"
      />
      <PersonalController
        controllerName="Портфолио"
        onClick={() => {
          changeNav("portfolio");
        }}
        activeClass={currentNav === "portfolio" ? true : false}
        controllerImg="/icons/portfolio.svg"
      />
      <PersonalController
        controllerName="Вывод средств"
        onClick={() => {
          changeNav("withdraws");
        }}
        activeClass={currentNav === "withdraws" ? true : false}
        controllerImg="/icons/withdrawnav.svg"
      />
    </nav>
  );
};
export default PersonalNav;
