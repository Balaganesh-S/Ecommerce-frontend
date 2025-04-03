import Product from "../Component/Product";
import styles from "./ProductPage.module.css";
import { getProducts } from "../services/productService";
import { useEffect } from "react";
import { useStore } from "../store/index.jsx";

export default function ProductPage() {
  const addProducts = useStore((state) => state.addProducts);
  const products = useStore((state) => state.products);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        console.log("Fetched Products:", data);
        addProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}
