import { itemsFurnitureMenuOne } from "../../../../shared/config/FurnitureCategories";
import styles from "./FurnitureGrid.module.scss";
import Image from "next/image";
import Link from "next/link";

export const FurnitureGridOne = () => {
  return (
    <div className={styles.gridContainer}>
      {itemsFurnitureMenuOne.map((item) => (
        <div key={item.id} className={`${styles.gridItem} ${item.className}`}>
          <Link href={item.link}>
            <h3>{item.title || ""}</h3>
            <Image src={item.image || ""} alt="" width={500} height={500} />
            <p>{item.price || ""}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
