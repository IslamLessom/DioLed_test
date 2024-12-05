import { Carousel } from "antd";
import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import styles from "./ProductInfo.module.scss";
const PruductInfo = () => {
  return (
    <>
      <h1 className={styles.title}>Бра RENA</h1>
      <Carousel draggable={true}>
        <Image src="/rena1.jpg" alt="bra1" width={100} height={100} />
        <Image src="/bra2.jpg" alt="bra2" width={100} height={100} />
        <Image src="/bra3.jpg" alt="bra3" width={100} height={100} />
        <Image src="/bra4.jpg" alt="bra4" width={100} height={100} />
      </Carousel>
      <div className={styles.product__function}>
        <div className={styles.product__function__general}>
          <CiHeart />
          <IoPodiumOutline />
          <CiShoppingCart />
        </div>
        <div className={styles.product__function__rating}>
          <Rate allowHalf defaultValue={2.5} />
        </div>
      </div>
    </>
  );
};

export default PruductInfo;
