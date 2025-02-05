import React from "react";
import { Badge, Button } from "antd";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./FilterProduct.module.scss";

const FilterProduct = () => {
  return (
    <div className={styles.filter}>
      <button>Люстры</button>

      <button>Бра</button>

      <button>Торшер</button>
    </div>
  );
};

export default FilterProduct;
