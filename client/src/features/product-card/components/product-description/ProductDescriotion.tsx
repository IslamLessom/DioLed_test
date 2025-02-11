import React from "react";
import { Tabs, Badge } from "antd";
import styles from "./ProductDescription.module.scss";
import ProductComment from "../product-comment/ProductComment";
import ReviewForm from "../product-review-form/ReviewForm";

interface ProductDescriptionProps {
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

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const items = [
    {
      key: "1",
      label: "Описание товара",
      children: <div className={styles.content}>{product.description}</div>,
    },
    {
      key: "2",
      label: (
        <span>
          Отзывы о товаре <Badge count={1} className={styles.reviewCount} />
        </span>
      ),
      children: (
        <div className={styles.content}>
          <ProductComment />
          <ReviewForm />
        </div>
      ),
    },
    {
      key: "3",
      label: "Доставка",
      children: <div className={styles.content}>Информация о доставке.</div>,
    },
    {
      key: "4",
      label: "Сборка",
      children: <div className={styles.content}>Информация о сборке.</div>,
    },
    {
      key: "5",
      label: "Оплата",
      children: <div className={styles.content}>Информация об оплате.</div>,
    },
    {
      key: "6",
      label: "Гарантия",
      children: <div className={styles.content}>Информация о гарантии.</div>,
    },
  ];

  return (
    <div className={styles.container}>
      <Tabs className={styles.tabs} defaultActiveKey="1" items={items} />
    </div>
  );
};

export default ProductDescription;
