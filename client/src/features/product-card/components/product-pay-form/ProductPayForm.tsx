import React from "react";
import ProductFormInfo from "./product-form-info-card/ProductFormInfo";
import ProductFormBuy from "./product-form-buy/ProductFormBuy";

interface ProductPayFormProps {
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

const ProductPayForm = ({ product }: ProductPayFormProps) => {
  return (
    <>
      <ProductFormInfo product={product} />
      <ProductFormBuy product={product} />
    </>
  );
};

export default ProductPayForm;
