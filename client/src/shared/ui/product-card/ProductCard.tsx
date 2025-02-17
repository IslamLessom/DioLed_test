"use client";

import React, { useState } from "react";

import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { Button, Rate } from "antd";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

import styles from "./ProductCard.module.scss";
import Link from "next/link";

interface Product {
  id: number;
  product_name: string;
  brand: string;
  category_id: number;
  base_price: number;
  description: string;
  url: string;
  vendor_code: string;
  delivery: boolean;
  pickup: boolean;
  store: boolean;
  created_at: string;
  updated_at: string;
  announcement_image_url: string;
  additional_images: string[];
  params: {
    Бренд: string;
    "Основной цвет": string;
    "Цвет свечения": string;
    "Цоколь лампы": string;
  };
  isFavorite?: boolean;
  onFavoriteClick?: (e: React.MouseEvent) => void;
  isBusket?: boolean;
  onBusketClick?: (e: React.MouseEvent) => void;
  isComparision?: boolean;
  onComparisionClick?: (e: React.MouseEvent) => void;
}

const ProductCard = ({
  id,
  product_name,
  base_price,
  announcement_image_url,
  isFavorite = false,
  onFavoriteClick,
  isBusket = false,
  onBusketClick,
  isComparision,
  onComparisionClick,
}: Product) => {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  return (
    <div className={styles.card}>
      <Image src={announcement_image_url} alt="" width={100} height={100} />
      <div className={styles.card__info}>
        <Link key={id} href={`/category/${id}`}>
          <p className={styles.card__info__price}>{base_price}</p>
          <p className={styles.card__info__name}>
            <p>
              {product_name && product_name.length > 40
                ? product_name.slice(0, 40) + "..."
                : product_name}
            </p>
          </p>
        </Link>

        <div className={styles.card__details_container}>
          <div className={styles.card__stars}>
            <Rate allowHalf defaultValue={3} />
          </div>
          <div className={styles.card__options}>
            <div className={styles.card__options__icons}>
              <div className={styles.favorite_icon} onClick={onFavoriteClick}>
                {isFavorite ? <FaHeart color="red" /> : <CiHeart />}
              </div>
              <div className={styles.shoping_icon} onClick={onBusketClick}>
                {isBusket ? <CiShoppingCart color="red" /> : <CiShoppingCart />}
              </div>
              <div className={styles.shoping_icon} onClick={onComparisionClick}>
                {isComparision ? (
                  <IoPodiumOutline color="red" />
                ) : (
                  <IoPodiumOutline />
                )}
              </div>
            </div>
            {!isMobile && (
              <Button>
                {" "}
                <Link key={id} href={`/category/${id}`}>
                  Подробнее
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
