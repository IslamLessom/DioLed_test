import React from "react";
import { mockData } from "../../api";
import styles from "./CardProduct.module.scss";
import { TiDeleteOutline } from "react-icons/ti";
import CardFavorite from "./ui/card-favorite/CardFavorite";

const CardProduct = () => {
  return (
    <div className={styles.product_card}>
      {mockData.map((item) => {
        return (
          <div key={item.id} className={styles.product_card__container}>
            <CardFavorite />
            <div className={styles.product_card__info}>
              <div className={styles.product_card__info_container}>
                <h2 className={styles.product_card__info__name}>{item.name}</h2>
                <TiDeleteOutline />
              </div>
              <div className={styles.info}>
                <p>Стиль</p>
                <p>{item.style}</p>
              </div>
              <div className={styles.info}>
                <p>Место применения: </p>
                <p>{item.application}</p>
              </div>
              <div className={styles.info}>
                <p>Цвет</p>
                <p>{item.style}</p>
              </div>

              <div className={styles.info}>
                <p>Материал плафона: </p>
                <p>{item.lampMaterial}</p>
              </div>
              <div className={styles.info}>
                <p>Материал</p>
                <p>{item.material}</p>
              </div>
              <div className={styles.info}>
                <p>Диаметр плафона, см: </p>
                <p>{item.diametr}</p>
              </div>
              <div className={styles.info}>
                <p>Высота, см: </p>
                <p>{item.height}</p>
              </div>
              <div className={styles.info}>
                <p>Ширина плафона, см: </p>
                <p>{item.width}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardProduct;
