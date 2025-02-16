import React from "react";
import styles from "./ComprasionContainer.module.scss";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";

const ComprasionContainer = ({ comparisonProducts, onRemove }: any) => {
  console.log(comparisonProducts);
  return (
    <div className={styles.comparsion}>
      <div className={styles.comparison_container_title}>
        <p>Название</p>
        <p className={styles.comparison_container_title_image}>Фото товара</p>
        <p>Цена</p>
        <p>Бренд</p>
        <p>Количество ламп</p>
        <p>Материал декора</p>
        <p>Материал плафона</p>
        <p>Основной цвет</p>
        <p>Пульт управления</p>
        <p>Серия</p>
        <p>Тип установки</p>
        <p>Цоколь лампы</p>
      </div>
      <div className={styles.comparison_containers}>
        {comparisonProducts.map((product: any) => (
          <div className={styles.comparison_container_container}>
            <p className={styles.comparison_container_container_name}>
              <>
                {product.product_name && product.product_name.length > 40
                  ? product.product_name.slice(0, 40) + "..."
                  : product.product_name}
                <TiDeleteOutline
                  onClick={(e) => {
                    e.preventDefault();
                    onRemove(product.id);
                  }}
                  color="red"
                  className={styles.delete_icon}
                  style={{ fontSize: "24px" }}
                />
              </>
            </p>
            <Image
              src={product.announcement_image_url}
              width={200}
              height={200}
              alt="image"
              className={styles.comparison_container_title_image}
            />
            <p>{product.base_price}</p>
            <p>{product.brand}</p>
            <p>{product.params?.["Количество ламп"]}</p>
            <p>{product.params?.["Материал декора"]}</p>
            <p>{product.params?.["Материал плафона"]}</p>
            <p>{product.params?.["Основной цвет"]}</p>
            <p>{product.params?.["Пульт управления"]}</p>
            <p>{product.params?.["Серия"]}</p>
            <p>{product.params?.["Тип установки"]}</p>
            <p>{product.params?.["Цвет свечения"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComprasionContainer;
