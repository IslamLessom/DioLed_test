import React from "react";
import styles from "./AdminSidebarRight.module.scss";
import { MdDeleteSweep, MdFormatListBulletedAdd } from "react-icons/md";
import { CsvFormaterButton } from "@/shared/ui/CsvFormaterButton/ImportButton/CsvFormaterButton";
import { CsvFormaterExportButton } from "@/shared/ui/CsvFormaterButton/ExportButton/CsvFormaterButton";

const AdminSudebarRight = () => {
  return (
    <div className={styles.sudebar_right}>
      <p>Импорт</p>
      <div className={styles.csv}>
        <CsvFormaterButton />
      </div>
      <p>Экспорт CSV</p>
      <div className={styles.csv}>
        <CsvFormaterExportButton />
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
