import Addresses from "../Component/Addresses";
import CartItem from "../Component/CartItem";
import PriceDetails from "../Component/PriceDetails";
import CartPage from "./CartPage";
import styles from "./HomePage.module.css";
import LoginPage from "./LoginPage";
import OrderPage from "./OrderPage";
import ProductPage from "./ProductPage";
export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* <ProductPage /> */}\
      <OrderPage />
    </div>
  );
}
