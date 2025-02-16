// ProductCard.jsx
import React from "react";
import styles from "./ProductSimilarCard.module.scss";
import Image from "next/image";

const ProductSimilarCard = ({ product }: any) => {
  return (
    <div className={styles.card}>
      <Image
        src={product.announcement_image_url}
        alt={product.product_name}
        width={150}
        height={150}
      />
      <div className={styles.cardContent}>
        <h3>
          {" "}
          {product.product_name && product.product_name.length > 20
            ? product.product_name.slice(0, 20) + "..."
            : product.product_name}
        </h3>
        <p>
          {product.description && product.description.length > 30
            ? product.description.slice(0, 30) + "..."
            : product.description || "Узнать подробнее..."}
        </p>
        <div className={styles.price}>{product.base_price}₽</div>
      </div>
    </div>
  );
};

export default ProductSimilarCard;
