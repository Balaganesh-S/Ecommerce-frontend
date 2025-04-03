import styles from "./NavBar.module.css";
import logo from "../assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { FiLogOut } from "react-icons/fi"; // Feather Icons
import { FaBoxOpen } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { getProductsByKeyword } from "../services/productService";
import { useStore } from "../store/index.jsx";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const addProducts = useStore((state) => state.addProducts);

  const toggleMenu = (val) => {
    setIsOpen(val);
  };

  const handleSearch = (keyword) => {
    const fetchData = async () => {
      try {
        const data = await getProductsByKeyword(keyword);
        console.log("Fetched Products:", data);
        addProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.searchbar}>
          <input
            type="text"
            name=""
            id=""
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              marginLeft: "10px",
              marginTop: "5px",
            }}
            onClick={() => {
              handleSearch(input);
            }}
          >
            <AiOutlineSearch size={24} color="black" />
          </button>
        </div>
        <div className={styles.userBtn}>
          <button
            onMouseEnter={() => {
              toggleMenu(true);
            }}
          >
            <FaUserCircle size={40} color="black" style={{ height: "25px" }} />
            <span style={{ fontSize: "18px", color: "white" }}>Login</span>
          </button>
          {isOpen && (
            <div
              className={styles.dropdown}
              onMouseLeave={() => {
                toggleMenu(false);
              }}
            >
              <ul>
                <li>
                  <button>
                    <FiUser size={24} color="black" />
                    <span>My Profile</span>
                  </button>
                </li>
                <li>
                  <button>
                    <FaBoxOpen size={24} color="black" />
                    <span>Orders</span>
                  </button>
                </li>
                <li>
                  <button>
                    <FiLogOut size={24} color="black" />
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className={styles.cart}>
          <button>
            <FaShoppingCart
              size={40}
              color="black"
              style={{ height: "25px" }}
            />
            <span style={{ fontSize: "18px", color: "white" }}>Cart</span>
          </button>
        </div>
      </div>
    </>
  );
}
