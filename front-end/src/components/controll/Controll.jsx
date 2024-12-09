import styles from "./controll.module.scss";

const Controll = ({orderID}) => {
  return (
    <div className={styles.controll__panel}>
        {orderID}
    </div>
  )
}
export default Controll;