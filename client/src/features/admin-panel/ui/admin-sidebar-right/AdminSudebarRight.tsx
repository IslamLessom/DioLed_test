import React from "react";
import { FaFileCsv } from "react-icons/fa";
import styles from "./AdminSudebarRight.module.scss";
import { MdDeleteSweep, MdFormatListBulletedAdd } from "react-icons/md";
const AdminSudebarRight = () => {
  return (
    <div className={styles.sudebar_right}>
      <p>Экспорт</p>
      <div className={styles.csv}>
        <FaFileCsv />
        CSV
      </div>
      <div className={styles.csv}>
        <MdDeleteSweep />
        Удалить товары
      </div>
      <div className={styles.csv}>
        <MdFormatListBulletedAdd />
        Добавить товары
      </div>
    </div>
  );
};

export default AdminSudebarRight;
