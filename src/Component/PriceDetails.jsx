import styles from "./PriceDetails.module.css";

export default function PriceDetails() {
  return (
    <div className={styles.priceDetailsContainer}>
      <h2>Price Details</h2>
      <div className={styles.priceRow}>
        <span>Price (2 items)</span>
        <span>$1000</span>
      </div>
      <div className={styles.priceRow}>
        <span>Delivery Charges</span>
        <span>$50</span>
      </div>
      <div className={`${styles.priceRow} ${styles.bold} ${styles.totalPrice}`}>
        <h3>Total Amount</h3>
        <h3>$850</h3>
      </div>
    </div>
  );
}
