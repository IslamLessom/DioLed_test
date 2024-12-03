import React from "react";
import { Badge, Button } from "antd";
import { TiDeleteOutline } from "react-icons/ti";
import styles from "./FilterProduct.module.scss";

const FilterProduct = () => {
  return (
    <div className={styles.filter}>
      <Badge
        count={
          <div className={styles.filter__delete}>
            <TiDeleteOutline />
          </div>
        }
      >
        <Button>Люстры</Button>
      </Badge>
      <Badge
        count={
          <div className={styles.filter__delete}>
            <TiDeleteOutline />
          </div>
        }
      >
        <Button>Бра</Button>
      </Badge>
      <Badge
        count={
          <div className={styles.filter__delete}>
            <TiDeleteOutline />
          </div>
        }
      >
        <Button>Торшер</Button>
      </Badge>
    </div>
  );
};

export default FilterProduct;
