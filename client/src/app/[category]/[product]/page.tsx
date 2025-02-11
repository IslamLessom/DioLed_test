import React from "react";
import ProductPage from "../../../features/product-card/components/product-page/ProductPage";
import { productsMockDate } from "../../../../mockDate";
import styles from "./page.module.scss";

interface Props {
  params: {
    product: string;
  };
}

const Product = ({ params }: Props) => {
  const product = productsMockDate.find(
    (item) => item.id === Number(params.product)
  );

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return <ProductPage product={product} />;
};

export default Product;
