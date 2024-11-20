import React from "react";
import styles from "./StatusBox.module.scss";
import { CiDeliveryTruck, CiDiscount1 } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
const StatusBox = () => {
  return (
    <div className={styles.statusBox}>
      <div className={styles.statusBox__item}>
        <div className={styles.statusBox__item__icon}>
          <CiDiscount1 />
        </div>
        <div className={styles.statusBox__item__text}>
          <p>Если найдете дешевле мы сделаем скидку!</p>
        </div>
      </div>
      <div className={styles.statusBox__item}>
        <div className={styles.statusBox__item__icon}>
          <FiEdit />
        </div>
        <div className={styles.statusBox__item__text}>
          <p>Изменяйте размеры и цвет любого товара!</p>
        </div>
      </div>
      <div className={styles.statusBox__item}>
        <div className={styles.statusBox__item__icon}>
          <CiDeliveryTruck />
        </div>
        <div className={styles.statusBox__item__text}>
          <p>Бесплатная доставка по Москве!</p>
        </div>
      </div>
    </div>
  );
};

export default StatusBox;
