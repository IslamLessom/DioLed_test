"use client";

import React from "react";
import styles from "./SelectedItem.module.scss";
import { Card, Checkbox, CheckboxProps } from "antd";
import { CartPage } from "../cart-page/CartPage";

export const SelectedItem = () => {
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={styles.selected}>
      <div className={styles.selected__conteiner}>
        <Card
          title={
            <p className={styles.selected__container_title}>
              Выбранные изделия
            </p>
          }
          bordered={false}
          className={styles.selected__card}
        >
          <Card
            title={<Checkbox onChange={onChange}>Выбрать все</Checkbox>}
            bordered={false}
            className={styles.selected__card}
          >
            <div className={styles.selected__card_item}>
              <p className={styles.sekected__card_item_name}>
                Наименование товара и описание
              </p>
              <p>Цена</p>
              <p>Сумма</p>
            </div>
          </Card>
          <CartPage />
          <CartPage />
          <CartPage />
        </Card>
      </div>
    </div>
  );
};
