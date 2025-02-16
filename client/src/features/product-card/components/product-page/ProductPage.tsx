import React from "react";
import PruductInfo from "../product-info/PruductInfo";
import styles from "./ProductPage.module.scss";
import ProductDescription from "../product-description/ProductDescriotion";
import ProductSimilar from "../product-similar/ProductSimilar";
import ProductPayForm from "../product-pay-form/ProductPayForm";
import { productsMockDate } from "../../../../../mockDate";

const ProductPage = ({ product }: any) => {
  console.log(product);
  return (
    <div className={styles.product}>
      <div className={styles.product__card_container}>
        <PruductInfo product={product} />
        <ProductDescription product={product} />
      </div>
      <div className={styles.product__pay_container}>
        <ProductPayForm product={product} />
      </div>
      <ProductSimilar />
    </div>
  );
};

export default ProductPage;
