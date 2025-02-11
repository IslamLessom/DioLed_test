"use client";

import React from "react";

import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { Button, Rate } from "antd";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

import styles from "./ProductCard.module.scss";

interface ProductCardProps {
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
  isFavorite?: boolean;
  onFavoriteClick?: (e: React.MouseEvent) => void;
}

const ProductCard = ({
  name,
  price,
  rating,
  isFavorite = false,
  onFavoriteClick,
}: ProductCardProps) => {
  const isMobile = useMediaQuery("(max-width: 1200px)");

  return (
    <div className={styles.card}>
      <Image src="/example.jpg" alt="" width={100} height={100} />
      <div className={styles.card__info}>
        <p className={styles.card__info__price}>{price}</p>
        <p className={styles.card__info__name}>{name}</p>
        <div className={styles.card__details_container}>
          <div className={styles.card__stars}>
            <Rate allowHalf defaultValue={rating} />
          </div>
          <div className={styles.card__options}>
            <div className={styles.card__options__icons}>
              <div className={styles.favorite_icon} onClick={onFavoriteClick}>
                {isFavorite ? <FaHeart color="red" /> : <CiHeart />}
              </div>
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
