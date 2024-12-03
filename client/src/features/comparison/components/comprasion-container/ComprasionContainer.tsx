import React from "react";
import styles from "./ComprasionContainer.module.scss";
import Image from "next/image";

const ComprasionContainer = () => {
  return (
    <div className={styles.comprasion}>
      <div className={styles.comprasion__container}>
        <p>
          <b>Название</b>
        </p>
        <p>Прихожая ПМ-13 BMS</p>
        <p>Прихожая Флай 12 BMS</p>
      </div>
      <div className={styles.comprasion__container}>
        <p>
          <b>Фото товара</b>
        </p>
        <Image width={100} height={100} alt="" src="/bra.jpg" />
        <Image width={100} height={100} alt="" src="/bra.jpg" />
      </div>
      <div className={styles.comprasion__container}>
        <p>
          <b>Цена</b>
        </p>
        <p>3000</p>
        <p>5000</p>
      </div>
      <div className={styles.comprasion__container}>
        <p>
          <b>Ширина</b>
        </p>
        <p>100 mm</p>
        <p>200 mm</p>
      </div>
      <div className={styles.comprasion__container}>
        <p>
          <b>Высота</b>
        </p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className={styles.comprasion__container}>
        {" "}
        <p>
          <b>Цвет</b>
        </p>
        <p>Синий</p>
        <p>Голубой</p>
      </div>
      <div className={styles.comprasion__container}>
        {" "}
        <p>
          <b>Материал</b>
        </p>
        <p>Хрусталь</p>
        <p>Стекло</p>
      </div>
      <div className={styles.comprasion__container}>
        {" "}
        <p>
          <b>Материал лампы</b>
        </p>
        <p>Стекло</p>
        <p>Хрусталь</p>
      </div>
    </div>
  );
};

export default ComprasionContainer;
