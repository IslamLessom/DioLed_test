"use client";

import { useState, useEffect, useRef } from "react";
import Sider from "antd/es/layout/Sider";
import "../shared/styles/globals.scss";
import HeaderComponent from "../widgets/Header/Header";
import Sidebar from "../widgets/Sidebar/ui/Sidebar";
import FooterComponent from "../widgets/Footer/ui/Footer";
import BannerCarousel from "../widgets/Carousel/BannerCarousel/BannerCarousel";
import StatusBox from "../shared/ui/StatusBox/ui/StatusBox";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import "./layout.scss";
import ContentContainerLayout from "@/widgets/ContentContainerLayout/ContentContainerLayout";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const siderRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [isMenuOpen]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <HeaderComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ContentContainerLayout
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        children={children}
      />
      <FooterComponent />
    </Layout>
  );
}
