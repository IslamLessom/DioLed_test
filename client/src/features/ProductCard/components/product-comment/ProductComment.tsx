import React from "react";
import { Rate } from "antd";
import styles from "./ProductComment.module.scss";

const ProductComment = () => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>О</div>
        <div className={styles.info}>
          <div className={styles.name}>Ольга Макушенко</div>
          <div className={styles.date}>09.11.2018 13:33:19</div>
        </div>
      </div>
      <div className={styles.content}>
        У нас большая семья из 5 человек. Обуви просто масса, которая всегда
        разбросана и в квартиру не зайти! Галошница 3.0 стала решением нашей
        проблемы. Она не только украсила нашу прихожую, но теперь вся наша
        парадная обувь аккуратно разместилась на полочках, появилось много
        свободного пространства, даже есть место отдельно для обуви гостей!
        Порадовала возможность заказать подходящие размеры под нашу прихожую.
      </div>
      <div className={styles.ratings}>
        <div className={styles.ratingItem}>
          <span className={styles.label}>Дизайн:</span>
          <Rate className={styles.value} disabled defaultValue={0} />
        </div>
        <div className={styles.ratingItem}>
          <span className={styles.label}>Удобство:</span>
          <Rate className={styles.value} disabled defaultValue={0} />
        </div>
        <div className={styles.ratingItem}>
          <span className={styles.label}>Качество:</span>
          <Rate className={styles.value} disabled defaultValue={0} />
        </div>
      </div>
    </div>
  );
};

export default ProductComment;
