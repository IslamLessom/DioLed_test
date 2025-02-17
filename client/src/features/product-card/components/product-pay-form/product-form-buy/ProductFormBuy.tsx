"use client";
import React, { useState } from "react";
import { Button, Space } from "antd";
import styles from "./ProductFormBuy.module.scss";
import Link from "next/link";

const ProductFormBuy = ({ product }: any) => {
  const [isBusket, setIsBusket] = useState(false);

  const toggleBusket = () => {
    const busket = JSON.parse(localStorage.getItem("busket") || "[]");
    let newBusket;

    if (isBusket) {
      newBusket = busket.filter((id: number) => id !== product.id);
    } else {
      newBusket = [...busket, product.id];
    }
    localStorage.setItem("busket", JSON.stringify(newBusket));
    setIsBusket(!isBusket);

    // Вызываем событие обновления избранного
    window.dispatchEvent(new Event("busketUpdated"));
  };

  return (
    <div className={styles.productInfo}>
      <div className={styles.priceSection}>
        <div className={styles.originalPrice}>
          <span className={styles.originalPriceLabel}>Приобрести товар:</span>
          <span className={styles.price}>{product.base_price}₽</span>
        </div>
      </div>

      <Space className={styles.buttonGroup}>
        <Button
          onClick={toggleBusket}
          type="default"
          className={styles.buyOneClickButton}
        >
          <Link href={`/basket`}>Оформить заказ</Link>
        </Button>
      </Space>
    </div>
  );
};

export default ProductFormBuy;
