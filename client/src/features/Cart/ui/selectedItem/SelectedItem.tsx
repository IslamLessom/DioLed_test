"use client";

import React from "react";
import styles from "./SelectedItem.module.scss";
import { Checkbox, CheckboxProps } from "antd"; // Импортируем только Checkbox
import { CartPage } from "../cartPage/CartPage";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export const SelectedItem = () => {
  const isMobile = useMediaQuery("(max-width: 1230px)");

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
          <CartPage />
          <CartPage />
          <CartPage />
        </div>
      </div>
    </div>
  );
};
