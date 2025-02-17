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

const PruductInfo = ({ product }: any) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isBusket, setIsBusket] = useState(false);
  const [isComparision, setIsComparision] = useState(false);
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

  const toggleBusket = () => {
    const busket = JSON.parse(localStorage.getItem("busket") || "[]");
    let newBusket;

    if (isBusket) {
      newBusket = busket.filter((id: number) => id !== product.id);
    } else {
      newBusket = [...busket, product.id];
    }
    localStorage.setItem("busket", JSON.stringify(newBusket));
    setIsBusket(!isBusket);

    // Вызываем событие обновления избранного
    window.dispatchEvent(new Event("busketUpdated"));
  };

  const toggleComprasion = () => {
    const comprasion = JSON.parse(localStorage.getItem("comparison") || "[]");
    let newComprasion;

    if (isBusket) {
      newComprasion = comprasion.filter((id: number) => id !== product.id);
    } else {
      newComprasion = [...comprasion, product.id];
    }
    localStorage.setItem("comparison", JSON.stringify(newComprasion));
    setIsComparision(!isComparision);

    window.dispatchEvent(new Event("comparisonUpdated"));
  };

  return (
    <>
      <h1 className={styles.title}>{product.product_name}</h1>
      <Carousel draggable={true}>
        <Image
          src={product.announcement_image_url}
          alt="bra1"
          width={500}
          height={400}
        />
        <Image
          src={product?.additional_images[0]}
          alt="bra2"
          width={500}
          height={400}
        />
        <Image
          src={product?.additional_images[1]}
          alt="bra3"
          width={500}
          height={400}
        />
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
          <div
            onClick={toggleComprasion}
            style={{ cursor: "pointer" }}
            className={styles.product__function__favorite}
          >
            {isComparision ? (
              <IoPodiumOutline color="red" />
            ) : (
              <IoPodiumOutline />
            )}
          </div>
          <div
            onClick={toggleBusket}
            className={styles.product__function__favorite}
            style={{ cursor: "pointer" }}
          >
            {isBusket ? <CiShoppingCart color="red" /> : <CiShoppingCart />}
          </div>
        </div>
        <div className={styles.product__function__rating}>
          <Rate allowHalf defaultValue={product.rating} />
        </div>
      </div>
    </>
  );
};

export default PruductInfo;
