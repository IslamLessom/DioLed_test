// ProductCard.jsx
import React from "react";
import styles from "./ProductSimilarCard.module.scss";

const ProductSimilarCard = ({ product }: any) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <div className={styles.cardContent}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className={styles.price}>${product.price}</div>
      </div>
    </div>
  );
};

export default ProductSimilarCard;
