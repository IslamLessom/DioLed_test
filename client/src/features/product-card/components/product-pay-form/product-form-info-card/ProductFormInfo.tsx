import React from "react";
import { Card } from "antd";
import styles from "./ProductFormInfo.module.scss";

const ProductFormInfo = ({ product }: any) => {
  const productParams = product.params || {};
  return (
    <Card className={styles.card} title="Общие параметры" bordered={false}>
      {Object.entries(productParams).map(([key, value]) => (
        <div className={styles.infoRow} key={key}>
          <span className={styles.label}>{key}:</span>
          <span className={styles.value}>{String(value)}</span>
        </div>
      ))}
    </Card>
  );
};

export default ProductFormInfo;
