import { Button, Card, Checkbox, Select } from "antd";
import React from "react";
import styles from "./CartPage.module.scss";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";

export const CartPage = () => {
  return (
    <div>
      <Card bordered={false} className={styles.selected__card}>
        <div className={styles.selected__card_item}>
          <div className={styles.selected__card_item_description}>
            <Checkbox />
            <div className={styles.selected__card_item_description_content}>
              <Image src="/bra.jpg" width={100} height={100} alt="lustra" />
              <div
                className={styles.selected__card_item_description_content_desc}
              >
                <p className={styles.item_name}>
                  <b>Люстра - название люстры</b>
                </p>
                <p className={styles.item_desc}>Особые параменты товара</p>
                <div className={styles.item_settings}>
                  <Select
                    defaultValue="1"
                    style={{ width: 80 }}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4", disabled: true },
                    ]}
                  />
                  <Button>
                    <CiTrash />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <p className={styles.price}>
            <b>40 000</b>
          </p>
          <p className={styles.summa}>
            <b>80 000 руб</b>
          </p>
        </div>
      </Card>
    </div>
  );
};
