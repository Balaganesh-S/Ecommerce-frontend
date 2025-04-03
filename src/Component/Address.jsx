import styles from "./Address.module.css";
export default function Address() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p>Balaganesh</p>
        <p style={{ marginLeft: "20px" }}>9003586467</p>
      </div>
      <div className={styles.address}>
        <p>Address</p>
        <p>Street</p>
        <p>City</p>
        <p>State</p>
        <p>Country</p>
        <p>Pin Code</p>
      </div>
    </div>
  );
}
