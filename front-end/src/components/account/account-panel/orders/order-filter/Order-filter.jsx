import Select from "@/components/ui/select/Select";
import Button from "@/components/ui/button/Button";

import styles from "./order-filter.module.scss";

const OrderFilter = ({setFilterName, filterValue}) => {
  
  const filterOptions = [
    {
      name: "Выполненные",
      color: "rgba(64, 59, 120, 0.66)",
    },
    {
      name: "В работе",
      color: "rgba(64, 59, 120, 0.66)",
    },
    {
      name: "Просроченные",
      color: "rgba(64, 59, 120, 0.66)",
    },
  ];
  const setFilter = (filterName) => {
    setFilterName(filterName);
  };
  return (

    
    <section className={styles.controlls__wrap}>
      <div className={styles.filter}>
        <Select
          options={filterOptions}
          value={filterValue}
          secondClass="filter"
          topOptions={162}
          setValue={(filterName) => {
            setFilter(filterName);
          }}
        />
      </div>
      <div className={styles.controlls}>
        <Button buttonText="Создать заказ" buttonClass="create__btn" />
      </div>
    </section>
  );
};
export default OrderFilter;
