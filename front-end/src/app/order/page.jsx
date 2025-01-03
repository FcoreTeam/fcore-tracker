import Order from "@/components/order/order/Order";
import styles from "./order.module.scss";

const OrderPage = () => {
 
  return (
    <div className={styles.order__wrap}>
      <Order />
    </div>
  );
};
export default OrderPage;
