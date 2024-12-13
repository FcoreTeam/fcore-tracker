import { useState } from "react";

import Select from "@/components/ui/select/Select";
import styles from "./reviews-filter.module.scss";

const filterData = [
  {
    name: "Сначала положительные",
    color: "rgba(64, 59, 120, 0.66)",
    iconUrl: "",
  },
  {
    name: "Сначала отрицательные",
    color: "rgba(64, 59, 120, 0.66)",
    iconUrl: "",
  },
  {
    name: "Сначала новые",
    color: "rgba(64, 59, 120, 0.66)",
    iconUrl: "",
  },
  {
    name: "Сначала старые",
    color: "rgba(64, 59, 120, 0.66)",
    iconUrl: "",
  },
];

const ReviewsFilter = ({ setFilterName, filterName }) => {
  const setFilter = (filterName) => {
    setFilterName(filterName);
  };
  return (
    <div className={styles.reviews__filter}>
      <Select
        options={filterData}
        value={filterName}
        setValue={(filterName) => {
          setFilter(filterName);
        }}
        isFilter={true}
      />
    </div>
  );
};
export default ReviewsFilter;
