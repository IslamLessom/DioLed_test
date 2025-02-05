import { Row, Col } from "antd";
import { FurnitureCategoryCard } from "../furniture-category-card/FurnitureCategoryCard";
import {
  FURNITURE_CATEGORIES,
  itemsFurnitureMenuOne,
  itemsFurnitureMenuThree,
  itemsFurnitureMenuTwo,
} from "../../../../shared/config/FurnitureCategories";
import styles from "./FurnitureGrid.module.scss";
import Image from "next/image";

export const FurnitureGridOne = () => {
  return (
    <div className={styles.gridContainer}>
      {itemsFurnitureMenuOne.map((item) => (
        <div key={item.id} className={`${styles.gridItem} ${item.className}`}>
          <h3>{item.title || ""}</h3>
          <Image src={item.image || ""} alt="" width={500} height={500} />
          <p>{item.price || ""}</p>
        </div>
      ))}
    </div>
  );
};

export const FurnitureGridTwo = () => {
  return (
    <div className={styles.gridContainer}>
      {itemsFurnitureMenuTwo.map((item) => (
        <div key={item.id} className={`${styles.gridItem} ${item.className}`}>
          <h3>{item.title || ""}</h3>
          <Image src={item.image || ""} alt="" width={500} height={500} />
          <p>{item.price || ""}</p>
        </div>
      ))}
    </div>
  );
};

export const FurnitureGridThree = () => {
  return (
    <div className={styles.gridContainer}>
      {itemsFurnitureMenuThree.map((item) => (
        <div key={item.id} className={`${styles.gridItem} ${item.className}`}>
          <h3>{item.title || ""}</h3>
          <Image src={item.image || ""} alt="" width={500} height={500} />
          <p>{item.price || ""}</p>
        </div>
      ))}
    </div>
  );
};
