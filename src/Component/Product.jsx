import styles from "./Product.module.css";
import mobileImg from "../assets/mobile.jpg";
export default function Product({ name, price, imageUrl }) {
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt="Product 1" />
      <p class={styles.productName}>{name}</p>
      <p class={styles.productPrice}>{price}</p>
    </div>
  );
}
