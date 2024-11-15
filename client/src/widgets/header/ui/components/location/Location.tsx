import React from "react";
import styles from "./Location.module.scss";
const Location = () => {
  return (
    <div className={styles.location}>
      <p className={styles.location__city}>Москва</p>
      <hr />
      <p className={styles.location__time}>C 9:00 до 21:00</p>
    </div>
  );
};

export default Location;
