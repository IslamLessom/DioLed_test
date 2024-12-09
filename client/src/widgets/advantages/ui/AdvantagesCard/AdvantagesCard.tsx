import { Card } from "antd";
import React from "react";
import styles from "./AdvantagesCard.module.scss";
import { Advantage } from "../../model/type";

const AdvantagesCard = ({ advantage }: { advantage: Advantage }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.iconWrapper}>{advantage.icon}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{advantage.title}</h3>
        <p className={styles.description}>{advantage.description}</p>
      </div>
    </Card>
  );
};

export default AdvantagesCard;
