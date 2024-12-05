import React from "react";
import PruductInfo from "../product-info/PruductInfo";
import styles from "./ProductPage.module.scss";
import ProductDescription from "../product-description/ProductDescriotion";
import ProductSimilar from "../product-similar/ProductSimilar";
import { products } from "../../api";
import ProductPayForm from "../product-pay-form/ProductPayForm";
const ProductPage = () => {
  return (
    <div className={styles.product}>
      <div className={styles.product__card_container}>
        <PruductInfo />
        <ProductDescription />
        <ProductSimilar products={products} />
      </div>
      <div className={styles.product__pay_container}>
        <ProductPayForm />
      </div>
    </div>
  );
};

export default ProductPage;
