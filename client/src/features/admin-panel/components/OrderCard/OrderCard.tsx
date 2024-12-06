import React from "react";
import styles from "./OrderCard.module.scss";
import Image from "next/image";
export const OrderCard = () => {
  return (
    <div className={styles.order_card}>
      <div className={styles.card}>
        <Image src="/bra.jpg" height={100} width={100} alt="ava" />
        <div className={styles.card__info}>
          <div className={styles.card__info_container}>
            <p className={styles.card__info_container_number}>#100605</p>
            <p>14 222$</p>
          </div>
          <p>Aoksana86</p>
          <p>2 декабря 2024 18:13</p>
        </div>
      </div>
    </div>
  );
};
