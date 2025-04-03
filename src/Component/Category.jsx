import styles from "./Category.module.css";
import { getCategories } from "../services/categoryService";
import { useEffect } from "react";
import { useStore } from "../store/index.jsx";
import { getProductsByCategoryId } from "../services/productService";

export default function Category() {
  const categories = useStore((state) => state.categories);
  const addCategories = useStore((state) => state.addCategories);
  const addProducts = useStore((state) => state.addProducts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        console.log("Fetched Categories:", data);
        addCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);
  const handleButtonClick = (categoryId) => {
    const fetchData = async () => {
      try {
        const data = await getProductsByCategoryId(categoryId);
        console.log("Fetched Products:", data);
        addProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  };
  return (
    <div className={styles.category}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleButtonClick(category.id)}
        >
          {category.name}
        </button>
      ))}
      {/* <button>Electronics</button>
      <button>Tv & Appliances</button>
      <button>Men</button>
      <button>Women</button>
      <button>Home & Furniture</button> */}
    </div>
  );
}
