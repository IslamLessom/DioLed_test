"use client";

import React, { useEffect, useState } from "react";
import styles from "./SelectedItem.module.scss";
import { Checkbox, CheckboxProps } from "antd"; // Импортируем только Checkbox
import { CartPage } from "../cart-page/CartPage";
import { useMediaQuery } from "../../../../shared/hooks/useMediaQuery";

export const SelectedItem = ({
  busketProduct,
  handleRemoveFromFavorites,
  onQuantityChange,
}: any) => {
  const isMobile = useMediaQuery("(max-width: 1230px)");

  const [products, setProducts] = useState(busketProduct);

  useEffect(() => {
    setProducts(busketProduct);
  }, [busketProduct]);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className={styles.selected}>
      <div className={styles.selected__conteiner}>
        <div className={styles.selected__card_general}>
          <h2 className={styles.selected__container_title}>
            Выбранные изделия
          </h2>
          <div className={styles.selected__card}>
            {!isMobile && (
              <>
                <Checkbox className={styles.checkbox} onChange={onChange}>
                  Выбрать все
                </Checkbox>
                <div className={styles.selected__card_item}>
                  <p className={styles.sekected__card_item_name}>
                    Наименование товара и описание
                  </p>
                  <div className={styles.sekected__card_item_name_container}>
                    <p>Цена</p>
                    <p>Сумма</p>
                  </div>
                </div>
              </>
            )}
            {isMobile && <Checkbox onChange={onChange}>Выбрать все</Checkbox>}
          </div>
          {busketProduct.map((product: any) => (
            <CartPage
              key={product.id}
              product={product}
              onRemove={handleRemoveFromFavorites}
              onQuantityChange={onQuantityChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
