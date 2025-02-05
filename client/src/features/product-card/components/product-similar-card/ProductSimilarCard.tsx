// ProductCard.jsx
import React from "react";
import styles from "./ProductSimilarCard.module.scss";
import Image from "next/image";

const ProductSimilarCard = ({ product }: any) => {
  return (
    <div className={styles.card}>
      <Image src="/bra.jpg" alt={product.name} width={150} height={150} />
      <div className={styles.cardContent}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className={styles.price}>${product.price}</div>
      </div>
    </div>
  );
};

export default ProductSimilarCard;
