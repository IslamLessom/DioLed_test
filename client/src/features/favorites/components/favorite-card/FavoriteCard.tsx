import React from "react";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./FavoriteCard.module.scss";

interface FavoriteCardProps {
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

const FavoriteCard = ({ product, onRemove }: FavoriteCardProps) => {
  return (
    <div className={styles.favorite_card}>
      <div className={styles.favorite_card__container}>
        <div className={styles.image_container}>
          <Image
            src="/example.jpg"
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
        <div className={styles.favorite_card__info}>
          <div className={styles.favorite_card__info_container}>
            <Link href={`/catalog/${product.id}`}>
              <h2 className={styles.favorite_card__info__name}>
                {product.name}
              </h2>
            </Link>
            <TiDeleteOutline
              onClick={(e) => {
                e.preventDefault();
                onRemove(product.id);
              }}
              className={styles.delete_icon}
            />
          </div>
          <div className={styles.info}>
            <p>Материал корпуса:</p>
            <p>{product.materialBody}</p>
          </div>
          <div className={styles.info}>
            <p>Материал фасадов:</p>
            <p>{product.materialFacade}</p>
          </div>
          <div className={styles.info}>
            <p>Производитель:</p>
            <p>{product.manufacturer}</p>
          </div>
          <div className={styles.info}>
            <p>Артикул:</p>
            <p>{product.article}</p>
          </div>

          <div className={styles.price_info}>
            <p className={styles.price}>{product.price} ₽</p>
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
