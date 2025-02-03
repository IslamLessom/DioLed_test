import React, { useState } from "react";
import styles from "./AdminSidebarRight.module.scss";
import { MdDeleteSweep, MdFormatListBulletedAdd } from "react-icons/md";
import { CsvFormaterButton } from "@/shared/ui/csv-formater-button/import-button/CsvFormaterButton";
import { CsvFormaterExportButton } from "@/shared/ui/csv-formater-button/export-button/CsvFormaterButton";
import { GrUserAdmin } from "react-icons/gr";
import { Modal } from "antd";
import CreateAdminButton from "@/shared/ui/create-admin-button/CreateAdminButton";

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
      <CreateAdminButton />
    </div>
  );
};

export default AdminSudebarRight;
