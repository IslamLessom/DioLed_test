import React from "react";
import { Button, Space } from "antd";
import styles from "./ProductFormBuy.module.scss";

interface ProductFormBuyProps {
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

const ProductFormBuy = ({ product }: ProductFormBuyProps) => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.priceSection}>
        <div className={styles.originalPrice}>
          <span className={styles.originalPriceLabel}>Приобрести товар:</span>
          <span className={styles.price}>{product.price}</span>
        </div>
        <div className={styles.discountPrice}>
          <span className={styles.discountPriceLabel}>Цена со скидкой:</span>
          <span className={styles.price}>{product.price}</span>
        </div>
      </div>

      <Space className={styles.buttonGroup}>
        <Button type="default" className={styles.buyOneClickButton}>
          Оформить заказ
        </Button>
      </Space>
    </div>
  );
};

export default ProductFormBuy;
