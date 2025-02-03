"use client";

import { useState, useEffect, useRef } from "react";
import "../shared/styles/globals.scss";
import HeaderComponent from "../widgets/header/Header";
import FooterComponent from "../widgets/footer/ui/Footer";
import { Layout } from "antd";
import ContentContainerLayout from "@/widgets/content-container-layout/ContentContainerLayout";
import "./layout.scss";

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
