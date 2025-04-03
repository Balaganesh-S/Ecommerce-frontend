import styles from "./CartItem.module.css";
import mobileImg from "../assets/mobile.jpg";
export default function CartItem() {
  return (
    <>
      <div className={styles.cartItem}>
        <img src={mobileImg} alt="Cart Item" />
        <div className={styles.CartItemDetails}>
          <h3 className={styles.CartItemName}>Product Name</h3>
          <p className={styles.cartItemPrice}>Price: 79999</p>
          <div className={styles.cartItemQuantity}>
            <button className={styles.quantityButton}>-</button>
            <span className={styles.quantityValue}>
              <input type="text" value={1} />
            </span>
            <button className={styles.quantityButton}>+</button>
          </div>
        </div>
        <button className={styles.removeButton}>Remove</button>
      </div>
    </>
  );
}
