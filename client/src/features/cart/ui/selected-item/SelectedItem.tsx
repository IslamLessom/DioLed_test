"use client";

import React from "react";
import styles from "./SelectedItem.module.scss";
import { Card, Checkbox, CheckboxProps } from "antd";
import { CartPage } from "../cart-page/CartPage";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

export const SelectedItem = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

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
            title={
              !isMobile && <Checkbox onChange={onChange}>Выбрать все</Checkbox>
            }
            bordered={false}
            className={styles.selected__card}
          >
            {!isMobile ? (
              <div className={styles.selected__card_item}>
                <p className={styles.sekected__card_item_name}>
                  Наименование товара и описание
                </p>
                <div className={styles.sekected__card_item_name_container}>
                  <p>Цена</p>
                  <p>Сумма</p>
                </div>
              </div>
            ) : (
              <Checkbox onChange={onChange}>Выбрать все</Checkbox>
            )}
          </Card>
          <CartPage />
          <CartPage />
          <CartPage />
        </Card>
      </div>
    </div>
  );
};
