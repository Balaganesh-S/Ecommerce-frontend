import styles from "./OrderItem.module.css";
import mobileImg from "../assets/mobile.jpg";

export default function OrderItem() {
  return (
    <div className={styles.itemCard}>
      <img src={mobileImg} alt="Product 1" />
      <p class={styles.itemName}>Smartphone XYZ</p>
      <p class={styles.itemPrice}>$499.99</p>
      <p class={styles.itemQuantity}>5</p>
    </div>
  );
}
