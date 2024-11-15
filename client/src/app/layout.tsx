"use client";

import { useState, useEffect } from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { BurgerButton } from "@/features/burger-button/BurgerButton";
import "@/shared/styles/globals.scss";
import "./layout.scss";
import HeaderComponent from "@/widgets/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <html lang="en">
      <body>
        <Layout style={{ minHeight: "100vh" }}>
          <Header
            style={{
              position: "fixed",
              lineHeight: "1",
              width: "100%",
              height: "90px !important",
              zIndex: 3,
              backgroundColor: "#ffffff",
            }}
          >
            <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <HeaderComponent />
          </Header>
          <Layout className="layout" style={{ marginTop: "64px" }}>
            <div
              className={`overlay ${isMenuOpen ? "visible" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            />
            <Sider
              width={isMenuOpen ? "40%" : "25%"}
              style={{ height: "100vh !important" }}
              className={isMenuOpen ? "mobile-visible" : "mobile-hidden"}
            >
              Sider
            </Sider>
            <Content style={{ padding: "20px", backgroundColor: "red" }}>
              {children}
            </Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </body>
    </html>
  );
}
