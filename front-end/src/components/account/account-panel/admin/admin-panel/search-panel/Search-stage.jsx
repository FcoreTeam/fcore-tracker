import { useSelector } from "react-redux";
import { useState } from "react";
import SearchData from "./search-data/Search-data";
import SearchFilter from "./search-filter/Search-filter";

import styles from "./search-stage.module.scss";
import SearchControll from "./search-controll/Search-controll";

const SearchStage = () => {
  const { data } = useSelector((state) => state.admin.adminSearch);

  const searchOptions = [
    { name: "Поиск по ID" },
    { name: "Поиск по названию" },
  ];
  const dataOptions = [{ name: "Аккаунт" }, { name: "Заказ" }, { name: "Чат" }];

  const [searchBy, setSearch] = useState("Поиск по ID");
  const [searchData, setSearchData] = useState("Аккаунт");
  const [openControll, setOpenControll] = useState(false);

  const setControll = (event) => {
    setOpenControll(event);
  };

  return (
    <div className={styles.search__stage}>
      <section className={styles.search__filter}>
        {!openControll ? (
          <SearchFilter
            searchOptions={searchOptions}
            dataOptions={dataOptions}
            searchBy={searchBy}
            searchData={searchData}
            setSearch={setSearch}
            setSearchData={setSearchData}
          />
        ) : null}
      </section>
      <section className={styles.search__data}>
        {openControll ? (
          <div className={styles.controll__panel}>
            <SearchControll searchData={searchData} />
          </div>
        ) : (
          data
            .filter((item) => item.searchType === searchData)
            .map((item) => (
              <SearchData {...item} onClick={() => setControll(true)} />
            ))
        )}
      </section>
    </div>
  );
};
export default SearchStage;
