import React from "react";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./FavoriteCard.module.scss";

export interface FavoriteCardProps {
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
  onRemove: (id: number) => void;
}

const FavoriteCard = ({ product, onRemove }: any) => {
  console.log(product);
  return (
    <div className={styles.favorite_card}>
      <div className={styles.favorite_card__container}>
        <div className={styles.image_container}>
          <Image
            src={product.announcement_image_url}
            alt={product.product_name}
            width={200}
            height={200}
          />
        </div>
        <div className={styles.favorite_card__info}>
          <div className={styles.favorite_card__info_container}>
            <Link href={`/catalog/${product.id}`}>
              <h2 className={styles.favorite_card__info__name}>
                {product.product_name && product.product_name.length > 40
                  ? product.product_name.slice(0, 40) + "..."
                  : product.product_name}
              </h2>
            </Link>
            <TiDeleteOutline
              onClick={(e) => {
                e.preventDefault();
                onRemove(product.id);
              }}
              className={styles.delete_icon}
              style={{ fontSize: "24px" }}
            />
          </div>
          <div className={styles.info}>
            <p>Бренд:</p>
            <p>{product.params?.["Бренд"]}</p>
          </div>
          <div className={styles.info}>
            <p>Тип установки:</p>
            <p>{product.params?.["Тип установки"]}</p>
          </div>
          <div className={styles.info}>
            <p>Основной цвет:</p>
            <p>{product.params?.["Основной цвет"]}</p>
          </div>
          <div className={styles.info}>
            <p>Серия:</p>
            <p>{product.params?.["Серия"]}</p>
          </div>

          <div className={styles.price_info}>
            <p className={styles.price}>{product.base_price} ₽</p>
            <Rate
              disabled
              defaultValue={product.rating}
              className={styles.rating}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
