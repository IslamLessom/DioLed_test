import React from "react";
import { Tabs, Badge } from "antd";
import styles from "./ProductDescription.module.scss";
import ProductComment from "../product-comment/ProductComment";
import ReviewForm from "../product-review-form/ReviewForm";

const ProductDescription = () => {
  const items = [
    {
      key: "1",
      label: "Описание товара",
      children: (
        <div className={styles.content}>
          Галошница 3.0 BMS – небольшая, но при этом достаточно вместительная,
          поможет вам легко поддерживать порядок в прихожей. Три откидных лотка
          обеспечат обуви удобное хранение, защитив от пыли и домашних животных,
          а на столешнице будут всегда под рукой необходимые средства ухода и
          аксессуары. Природный древесный оттенок добавит минималистичному
          современному интерьеру уюта. Купить Галошницу 3.0 BMS приглашаем в наш
          интернет-магазин с выбором цвета и размеров.
        </div>
      ),
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
