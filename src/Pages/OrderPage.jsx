import OrderItem from "../Component/OrderItem";
import styles from "./OrderPage.module.css";
export default function OrderPage() {
  return (
    <div className={styles.container}>
      <OrderItem />
      <OrderItem />
      <OrderItem />
    </div>
  );
}
