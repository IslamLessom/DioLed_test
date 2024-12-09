import React from "react";
import { Card } from "antd";
import styles from "./ProductFormInfo.module.scss";

const ProductFormInfo = () => {
  return (
    <Card className={styles.card} title="Общие параметры" bordered={false}>
      <div className={styles.infoRow}>
        <span className={styles.label}>Материал корпуса:</span>
        <span className={styles.value}>ЛДСП</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Материал фасадов:</span>
        <span className={styles.value}>ЛДСП</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Производитель:</span>
        <span className={styles.value}>"Бэст-Мебель" (Россия)</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Срок изготовления:</span>
        <span className={styles.value}>3 дня</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Гарантия:</span>
        <span className={styles.value}>18 месяцев</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Подъём:</span>
        <span className={styles.value}>от 250 руб</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Сборка:</span>
        <span className={styles.value}>от 10%</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Артикул:</span>
        <span className={styles.value}>1083876</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Доставка по Москве (МКАД):</span>
        <span className={styles.value}>Бесплатно</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Дата доставки:</span>
        <span className={styles.value}>10.12 - 13.12</span>
      </div>
    </Card>
  );
};

export default ProductFormInfo;
