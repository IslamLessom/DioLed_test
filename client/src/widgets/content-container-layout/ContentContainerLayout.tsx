"use client";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Sidebar from "../sidebar/ui/Sidebar";
import StatusBox from "../../shared/ui/status-box/ui/StatusBox";
import BannerCarousel from "../carousel/banner-carousel/BannerCarousel";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { usePathname } from "next/navigation"; // Импортируем useRouter

const ContentContainerLayout = ({
  children,
  isMenuOpen,
  setIsMenuOpen,
}: any) => {
  const currentPath = usePathname(); // Получаем текущий путь

  // Определяем страницы, на которых скрываем компоненты
  const hideComponents = [
    "/profile",
    "/auth",
    "/admin",
    "/comparison",
    "/basket",
  ];

  const shouldHideComponents = hideComponents.includes(currentPath);

  return (
    <Layout className="layout">
      <div
        className={`overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      />
      {!shouldHideComponents && ( // Условный рендеринг Sidebar
        <Sider
          width={isMenuOpen ? "60%" : "25%"}
          style={{
            backgroundColor: "rgb(245 245 245)",
          }}
          className={isMenuOpen ? "mobile-visible" : "mobile-hidden"}
        >
          <Sidebar />
        </Sider>
      )}
      <Content className="content">
        {!shouldHideComponents && ( // Условный рендеринг BannerCarousel и StatusBox
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
