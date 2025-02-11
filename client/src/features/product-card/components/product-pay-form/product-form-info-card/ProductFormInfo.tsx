import React from "react";
import { Card } from "antd";
import styles from "./ProductFormInfo.module.scss";

interface ProductFormInfoProps {
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

const ProductFormInfo = ({ product }: ProductFormInfoProps) => {
  return (
    <Card className={styles.card} title="Общие параметры" bordered={false}>
      <div className={styles.infoRow}>
        <span className={styles.label}>Материал корпуса:</span>
        <span className={styles.value}>{product.materialBody}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Материал фасадов:</span>
        <span className={styles.value}>{product.materialFacade}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Производитель:</span>
        <span className={styles.value}>"{product.manufacturer}" (Россия)</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Срок изготовления:</span>
        <span className={styles.value}>{product.productionTime}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Гарантия:</span>
        <span className={styles.value}>{product.warranty}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Подъём:</span>
        <span className={styles.value}>
          от {product.lifting ? "250 руб" : "бесплатно"}
        </span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Сборка:</span>
        <span className={styles.value}>
          от {product.assembly ? "10%" : "0%"}
        </span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Артикул:</span>
        <span className={styles.value}>{product.article}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Доставка по Москве (МКАД):</span>
        <span className={styles.value}>{product.deliveryMoscow}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Дата доставки:</span>
        <span className={styles.value}>{product.deliveryDate}</span>
      </div>
    </Card>
  );
};

export default ProductFormInfo;
