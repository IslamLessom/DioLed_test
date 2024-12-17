import React from "react";
import styles from "./AdminSidebarRight.module.scss";
import { MdDeleteSweep, MdFormatListBulletedAdd } from "react-icons/md";
import { CsvFormaterButton } from "@/shared/ui/CsvFormaterButton/CsvFormaterButton";
const AdminSudebarRight = () => {
  return (
    <div className={styles.sudebar_right}>
      <p>Экспорт</p>
      <div className={styles.csv}>
        <CsvFormaterButton />
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
