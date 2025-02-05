"use client";

import React from "react";

import { CiHeart, CiShoppingCart, CiStar } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { Button, Rate } from "antd";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import Image from "next/image";

import styles from "./ProductCard.module.scss";

const ProductCard = () => {
  const isMobile = useMediaQuery("(max-width: 1200px)");

  return (
    <div className={styles.card}>
      <Image src="/example.jpg" alt="" width={100} height={100} />
      <div className={styles.card__info}>
        <p className={styles.card__info__price}>25 000$</p>
        <p className={styles.card__info__name}>Комод Шайн 23 глянцевый BMS</p>
        <div className={styles.card__details_container}>
          <div className={styles.card__stars}>
            <Rate allowHalf defaultValue={2.5} />
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
    </div>
  );
};

export default ProductCard;
