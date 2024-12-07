import styles from "./page.module.scss"
import Account from "@/components/account/Account";


const Home = () => {
  return (
    <div className={styles.page}>
        <Account />
    </div>
  )
}
export default Home;