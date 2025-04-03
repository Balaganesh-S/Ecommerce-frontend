import CartItem from "../Component/CartItem";
import PriceDetails from "../Component/PriceDetails";
import styles from "./CartPage.module.css";
export default function CartPage() {
  return (
    <div className={styles.conatiner}>
      <div className={styles.Cartcontainer}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className={styles.checkout}>
          <button>Checkout</button>
        </div>
      </div>
      <PriceDetails />
    </div>
  );
}
