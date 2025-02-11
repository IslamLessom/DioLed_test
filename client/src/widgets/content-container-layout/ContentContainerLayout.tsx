"use client";
import React from "react";
import { Content } from "antd/es/layout/layout";
import Sidebar from "../sidebar/ui/Sidebar";
import StatusBox from "../../shared/ui/status-box/ui/StatusBox";
import BannerCarousel from "../carousel/banner-carousel/BannerCarousel";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";

import {
  useHideAdmin,
  useHideComponents,
} from "../../features/selectors/useHideComponents";
import { AdminPage } from "../../features/admin-panel/ui/admin-page/AdminPage";
import { LayoutProfile } from "../../features/admin-panel/components";

const ContentContainerLayout = ({
  children = null,
  isMenuOpen,
  setIsMenuOpen,
}: any) => {
  return (
    <Layout className="layout">
      <div
        className={`overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />
      {!useHideComponents() && ( // Условный рендеринг Sidebar
        <Sider
          width={isMenuOpen ? "40%" : "22%"}
          style={{
            backgroundColor: "rgb(245 245 245)",
          }}
          className={isMenuOpen ? "mobile-visible" : "mobile-hidden"}
        >
          <Sidebar />
        </Sider>
      )}
      {useHideAdmin() && <LayoutProfile />}
      <Content className="content">
        {!useHideComponents() && ( // Условный рендеринг BannerCarousel и StatusBox
          <>
            <BannerCarousel />
            <StatusBox />
          </>
        )}
        {children}
      </Content>
    </Layout>
  );
};

export default ContentContainerLayout;
