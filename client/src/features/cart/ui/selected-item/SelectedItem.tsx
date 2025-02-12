"use client";

import React, { useEffect, useState } from "react";
import styles from "./SelectedItem.module.scss";
import { Checkbox, CheckboxProps } from "antd"; // Импортируем только Checkbox
import { CartPage } from "../cart-page/CartPage";
import { useMediaQuery } from "../../../../shared/hooks/useMediaQuery";
import { Product } from "../../../favorites/components/favorite-page/FavoritePage";
import { productsMockDate } from "../../../../../mockDate";
import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";

export const SelectedItem = () => {
  const isMobile = useMediaQuery("(max-width: 1230px)");
  const [busketProduct, setBusketProduct] = useState<Product[]>([]);

  const loadBusket = () => {
    const favorites = JSON.parse(localStorage.getItem("busket") || "[]");
    const favoriteItems = productsMockDate.filter((product) =>
      favorites.includes(product.id)
    );
    setBusketProduct(favoriteItems);
  };

  useEffect(() => {
    loadBusket();
  }, []);

  const handleRemoveFromFavorites = (productId: number) => {
    const buskets = JSON.parse(localStorage.getItem("busket") || "[]");
    const newFavorites = buskets.filter((id: number) => id !== productId);
    localStorage.setItem("busket", JSON.stringify(newFavorites));
    loadBusket();

    // Вызываем событие обновления избранного
    window.dispatchEvent(new Event("busketUpdated"));
  };

  if (busketProduct.length === 0) {
    return (
      <div className={styles.empty}>
        <p>В корзине пока нет товаров</p>
      </div>
    );
  }

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
          {busketProduct.map((product) => (
            <CartPage
              key={product.id}
              product={product}
              onRemove={handleRemoveFromFavorites}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
