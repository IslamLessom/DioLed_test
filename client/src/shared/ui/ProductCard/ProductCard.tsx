import React from "react";

import { CiHeart, CiShoppingCart, CiStar } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { Button } from "antd";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import Image from "next/image";

import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  const isMobile = useMediaQuery("(max-width: 1200px)");

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
            <CiShoppingCart />
          </div>
          {!isMobile && <Button>Подробнее</Button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
