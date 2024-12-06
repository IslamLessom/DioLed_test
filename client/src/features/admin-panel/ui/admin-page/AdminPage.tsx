import React from "react";
import styles from "./AdminPage.module.scss";
import { Tabs } from "antd";
import { adminPanel } from "../../model/item";
export const AdminPage = () => {
  return (
    <div className={styles.admin}>
      {" "}
      <Tabs className={styles.tabs} defaultActiveKey="1" items={adminPanel} />
    </div>
  );
};
