import { Row, Col } from "antd";
import { FurnitureCategoryCard } from "../FurnitureCategoryCard/FurnitureCategoryCard";
import { FURNITURE_CATEGORIES } from "@/shared/config/FurnitureCategories";
import styles from "./FurnitureGrid.module.scss";

export const FurnitureGrid = () => {
  return (
    <div className={styles.container}>
      <Row gutter={[24, 24]}>
        {FURNITURE_CATEGORIES.map((category) => (
          <Col xs={24} sm={12} md={8} lg={6} key={category.id}>
            <FurnitureCategoryCard category={category} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
