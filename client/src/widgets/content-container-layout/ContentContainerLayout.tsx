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
import { LayoutProfile } from "../../features/admin-panel/components";

const ContentContainerLayout = ({
  children = null,
  isMenuOpen,
  setIsMenuOpen,
}: any) => {
  return (
    <Layout
      className="layout"
      style={{
        backgroundColor: "white",
        maxWidth: "1710px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        className={`overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />
      {!useHideComponents() && ( // Условный рендеринг Sidebar
        <Sider
          width={isMenuOpen ? "50%" : "20%"}
          style={{
            backgroundColor: "white",
          }}
          className={isMenuOpen ? "mobile-visible" : "mobile-hidden"}
        >
          <Sidebar isMenuOpen={isMenuOpen} />
        </Sider>
      )}
      {useHideAdmin() && <LayoutProfile />}
      <Content
        className="content"
        style={{
          backgroundColor: "white",
          maxWidth: "1350px",
          width: "65%",
        }}
      >
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
