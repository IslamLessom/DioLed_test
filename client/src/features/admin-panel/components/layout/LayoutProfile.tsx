import { Content } from "antd/es/layout/layout";
import React from "react";
import { AdminDetail } from "../../ui/admin-deteil";
import Sider from "antd/es/layout/Sider";
import AdminListShop from "../../ui/admin-list-shop/AdminListShop";
import { Layout } from "antd";
import AdminSudebarRight from "../../ui/admin-sidebar-right/AdminSidebarRight";
import AdminSidebar from "../../ui/admin-sidebar/AdminSidebar";
import styles from "./LayoutProfile.module.scss";

export const LayoutProfile = ({ children = null }: any) => {
  return (
    <Layout style={{ width: "100vw" }} className={styles.layout}>
      <Sider className={styles.layout__left_sidebar} width="15%">
        <AdminSidebar />
      </Sider>
      <Content className={styles.layout__content}>{children}</Content>
      <Sider className={styles.layout__right_sidebar} width="15%">
        <AdminSudebarRight />
      </Sider>
    </Layout>
  );
};
