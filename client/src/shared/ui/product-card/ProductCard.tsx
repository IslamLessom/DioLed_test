import React from "react";

import { CiHeart, CiStar } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { Button } from "antd";
import Image from "next/image";

import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <Image src="/example.jpg" alt="" width={100} height={100} />
      <div className={styles.card__info}>
        <p>25 000</p>
        <p>Комод Шайн 23 глянцевый BMS</p>
        <div className={styles.card__stars}>
          <CiStar />
          <p>4.5</p>
        </div>
        <div className={styles.card__options}>
          <div className={styles.card__options__icons}>
            <CiHeart />
            <IoPodiumOutline />
          </div>
          <Button>Подробнее</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
