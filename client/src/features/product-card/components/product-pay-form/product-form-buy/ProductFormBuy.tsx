import React from "react";
import { Button, Space } from "antd";
import styles from "./ProductFormBuy.module.scss";

const ProductFormBuy = () => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.priceSection}>
        <div className={styles.originalPrice}>
          <span className={styles.originalPriceLabel}>Приобрести товар:</span>
          <span className={styles.price}>18 190 руб.</span>
        </div>
        <div className={styles.discountPrice}>
          <span className={styles.discountPriceLabel}>Цена со скидкой:</span>
          <span className={styles.price}>12 090 руб.</span>
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
