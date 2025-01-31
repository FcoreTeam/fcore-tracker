import { useState } from "react";

import ControllNavigation from "./controll-navigation/Controll-navigation";

import styles from "./search-controll.module.scss";
import UserControll from "./user-controll/User-controll";

const SearchControll = ({ searchId, searchData }) => {
  const [currentNav, setNav] = useState();

  return (
    <div className={styles.search__controll}>
      {searchData === "Аккаунт" ? (
        <UserControll />
      ) : searchData === "Чат" ? (
        <></>
      ) : searchData === "Заказ" ? (
        <></>
      ) : (
        <></>
      )}
      <ControllNavigation
        navType={searchData}
        setNav={setNav}
        currentNav={currentNav}
      />
    </div>
  );
};
export default SearchControll;
