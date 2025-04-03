import { FaPlus } from "react-icons/fa";
import Address from "./Address";
import styles from "./Addresses.module.css";
import NewAddress from "./NewAddress";
import { useState } from "react";
export default function Addresses() {
  const [isPlusClicked, setIsPlusClicked] = useState(false);
  return (
    <div className={styles.container}>
      {isPlusClicked ? (
        <NewAddress setIsPlusClicked={setIsPlusClicked} />
      ) : (
        <div
          className={styles.addAddress}
          onClick={() => {
            setIsPlusClicked(true);
          }}
        >
          <FaPlus size={24} color="rgb(0, 89, 255)" />
          <p>Add Address</p>
        </div>
      )}

      <Address />
    </div>
  );
}
