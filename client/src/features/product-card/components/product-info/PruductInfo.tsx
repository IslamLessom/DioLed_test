"use client";
import { Carousel } from "antd";
import { Rate } from "antd";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import styles from "./ProductInfo.module.scss";

interface ProductInfoProps {
  product: {
    id: number;
    name: string;
    price: string;
    materialBody: string;
    materialFacade: string;
    manufacturer: string;
    productionTime: string;
    warranty: string;
    lifting: boolean;
    assembly: boolean;
    article: string;
    deliveryMoscow: string;
    deliveryDate: string;
    description: string;
    reviews: {
      average: number;
      count: number;
    };
    rating: number;
    image: string;
  };
}

const PruductInfo = ({ product }: ProductInfoProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Проверяем localStorage при монтировании компонента
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let newFavorites;

    if (isFavorite) {
      newFavorites = favorites.filter((id: number) => id !== product.id);
    } else {
      newFavorites = [...favorites, product.id];
    }

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);

    // Вызываем событие обновления избранного
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <>
      <h1 className={styles.title}>{product.name}</h1>
      <Carousel draggable={true}>
        <Image src="/rena1.jpg" alt="bra1" width={500} height={400} />
        <Image src="/bra2.jpg" alt="bra2" width={500} height={400} />
        <Image src="/bra3.jpg" alt="bra3" width={500} height={400} />
        <Image src="/bra4.jpg" alt="bra4" width={500} height={400} />
      </Carousel>
      <div className={styles.product__function}>
        <div className={styles.product__function__general}>
          <div
            onClick={toggleFavorite}
            className={styles.product__function__favorite}
            style={{ cursor: "pointer" }}
          >
            {isFavorite ? <FaHeart color="red" /> : <CiHeart />}
          </div>
          <IoPodiumOutline />
          <CiShoppingCart />
        </div>
        <div className={styles.product__function__rating}>
          <Rate allowHalf defaultValue={product.rating} />
        </div>
      </div>
    </>
  );
};

export default PruductInfo;
