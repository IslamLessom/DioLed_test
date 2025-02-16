import React from "react";
import ProductFormInfo from "./product-form-info-card/ProductFormInfo";
import ProductFormBuy from "./product-form-buy/ProductFormBuy";

const ProductPayForm = ({ product }: any) => {
  return (
    <>
      <ProductFormInfo product={product} />
      <ProductFormBuy product={product} />
    </>
  );
};

export default ProductPayForm;
