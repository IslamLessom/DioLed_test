import { Button, Card, Checkbox, Select } from "antd";
import React from "react";
import styles from "./CartPage.module.scss";
import Image from "next/image";
import { CiTrash } from "react-icons/ci";
import { FavoriteCardProps } from "../../../favorites/components/favorite-card/FavoriteCard";

export const CartPage = ({
  product,
  onRemove,
  onQuantityChange,
}: any & {
  onQuantityChange: (id: number, quantity: number) => void;
}) => {
  // Состояние для хранения текущего количества
  const [quantity, setQuantity] = React.useState(1);

  const cleanPrice =
    typeof product.base_price === "string"
      ? product.base_price.replace(/\s/g, "").replace(",", ".")
      : typeof product.base_price === "number"
      ? product.base_price.toFixed(2) // Если число, форматируем в строку
      : "0";
  const totalSum = Number(cleanPrice) * quantity;

  // Обработчик изменения значения Select
  const handleQuantityChange = (value: number) => {
    setQuantity(value);
    onQuantityChange(product.id, value);
  };
  return (
    <div className={styles.card_page__container}>
      <div className={styles.selected__card}>
        <div className={styles.selected__card_item}>
          <div className={styles.selected__card_item_description}>
            <Checkbox />
            <div className={styles.selected__card_item_description_content}>
              <Image
                src={product.announcement_image_url}
                width={100}
                height={100}
                alt="lustra"
              />
              <div
                className={styles.selected__card_item_description_content_desc}
              >
                <p className={styles.item_name}>
                  <b>
                    {" "}
                    {product.product_name && product.product_name.length > 40
                      ? product.product_name.slice(0, 40) + "..."
                      : product.product_name}
                  </b>
                </p>
                <p className={styles.item_desc}>Особые параменты товара</p>
                <div className={styles.item_settings}>
                  <Select
                    value={`${quantity}`}
                    style={{ width: 80 }}
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "3", label: "3" },
                      { value: "4", label: "4", disabled: true },
                    ]}
                    onChange={(value) => handleQuantityChange(parseInt(value))}
                  />
                  <Button>
                    <CiTrash
                      onClick={(e) => {
                        e.preventDefault();
                        onRemove(product.id);
                      }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.selected_info}>
            <p className={styles.price}>
              <b>{product.base_price}₽</b>
            </p>
            <p className={styles.summa}>
              <b>{totalSum.toLocaleString()}₽</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
