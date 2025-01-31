import styles from "./search-data.module.scss";

const SearchData = ({ searchName, searchType, searchId, onClick }) => {
  return (
    <div className={styles.search__data} onClick={onClick}>
      <div className={styles.search__info}>
        <p className={styles.search__name}>{searchName}</p>
        <p className={styles.search__type}>Тип: {searchType}</p>
      </div>
      <p className={styles.search__id}>ID: {searchId}</p>
    </div>
  );
};
export default SearchData;
