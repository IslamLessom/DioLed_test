import React from "react";
import PruductInfo from "../product-info/PruductInfo";
import styles from "./ProductPage.module.scss";
import ProductDescription from "../product-description/ProductDescriotion";
import ProductSimilar from "../product-similar/ProductSimilar";
import ProductPayForm from "../product-pay-form/ProductPayForm";
import { productsMockDate } from "../../../../../mockDate";

interface ProductPageProps {
  product: {
    id: number;
    name: string;
    price: string;
    materialBody: string;
    materialFacade: string;
    manufacturer: string;
    productionTime: string;
    warranty: string;
    lifting: boolean;
    assembly: boolean;
    article: string;
    deliveryMoscow: string;
    deliveryDate: string;
    description: string;
    reviews: {
      average: number;
      count: number;
    };
    rating: number;
    image: string;
  };
}

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__card_container}>
        <PruductInfo product={product} />
        <ProductDescription product={product} />
      </div>
      <div className={styles.product__pay_container}>
        <ProductPayForm product={product} />
      </div>
      <ProductSimilar products={productsMockDate} />
    </div>
  );
};

export default ProductPage;
