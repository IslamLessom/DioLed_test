import React from "react";
import { Button, Space } from "antd";
import styles from "./ProductFormBuy.module.scss";

const ProductFormBuy = ({ product }: any) => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.priceSection}>
        <div className={styles.originalPrice}>
          <span className={styles.originalPriceLabel}>Приобрести товар:</span>
          <span className={styles.price}>{product.base_price}</span>
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
