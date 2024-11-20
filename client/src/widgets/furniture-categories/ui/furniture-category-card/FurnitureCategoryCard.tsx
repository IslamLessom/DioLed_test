import { Card } from "antd";
import Image from "next/image";
import { FurnitureCategory } from "@/widgets/furniture-categories/model/types";
import styles from "./FurnitureCategoruCard.module.scss";

interface FurnitureCategoryCardProps {
  category: FurnitureCategory;
}

export const FurnitureCategoryCard = ({
  category,
}: FurnitureCategoryCardProps) => {
  return (
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
  );
};
