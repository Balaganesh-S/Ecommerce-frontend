import styles from "./NewAddress.module.css";
export default function NewAddress({ setIsPlusClicked }) {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="10-digit mobile number" />
      <input type="text" placeholder="Pincode" />
      <input type="text" placeholder="Locality" />
      <textarea name="" id="" placeholder="Address"></textarea>
      <input type="text" placeholder="city" />
      <input type="text" placeholder="state" />
      <div className={styles.buttons}>
        <button>Save</button>
        <button
          style={{
            backgroundColor: "transparent",
            color: "#273fee",
            width: "75px",
          }}
          onClick={() => {
            setIsPlusClicked(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
