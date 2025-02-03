"use client";
import { Card } from "antd";
import Image from "next/image";
import { FurnitureCategory } from "../../../../widgets/furniture-categories/model/types";
import styles from "./FurnitureCategoruCard.module.scss";
import Link from "next/link";

interface FurnitureCategoryCardProps {
  category: FurnitureCategory;
}

export const FurnitureCategoryCard = ({
  category,
}: FurnitureCategoryCardProps) => {
  return (
    <Link href={category.href}>
      <Card
        className={styles.card}
        bodyStyle={{ padding: 0 }}
        cover={
          <div className={styles.imageWrapper}>
            <Image
              src={category.image}
              alt={category.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
        }
      >
        <div className={styles.content}>
          <h3 className={styles.title}>{category.title}</h3>

          <div className={styles.price}>от {category.price} руб.</div>
        </div>
      </Card>
    </Link>
  );
};
