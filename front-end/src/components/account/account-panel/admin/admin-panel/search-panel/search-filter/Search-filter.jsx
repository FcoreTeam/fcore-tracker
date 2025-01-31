"use client";

import { useState } from "react";

import Input from "@/components/ui/input/Input";
import Select from "@/components/ui/select/Select";

import styles from "./search-filter.module.scss";

const SearchFilter = ({
  searchOptions,
  dataOptions,
  searchBy,
  searchData,
  setSearch,
  setSearchData,
}) => {
  const setFilter = (filterName) => {
    setSearch(filterName);
  };

  const setData = (filterName) => {
    setSearchData(filterName);
  };

  return (
    <div className={styles.search__filter}>
      <Input
        inputClass="search__input"
        inputType="number"
        style={searchBy === "Поиск по ID" ? { width: "10%" } : { width: "40%" }}
        inputPlaceholder={
          searchBy === "Поиск по ID" ? "Поиск по ID" : "Поиск по названию"
        }
      />
      <Select
        options={searchOptions}
        valueClass="search__select"
        secondClass="rotate"
        topOptions={122}
        value={searchBy}
        setValue={(filterName) => setFilter(filterName)}
        isFilter={true}
      />
      <Select
        options={dataOptions}
        value={searchData}
        setValue={(filterName) => setData(filterName)}
        valueClass="search__select"
        secondClass="rotate"
        topOptions={162}
        isFilter={true}
      />
    </div>
  );
};
export default SearchFilter;
