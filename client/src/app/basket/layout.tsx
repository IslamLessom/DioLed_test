"use client";

import { useState, useEffect, useRef } from "react";
import "@/shared/styles/globals.scss";
import HeaderComponent from "@/widgets/header/Header";
import FooterComponent from "@/widgets/footer/ui/Footer";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import "./layout.scss";

export default function BusketLayout({
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
              height: "90px",
              zIndex: 999,
              backgroundColor: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0px",
            }}
          >
            <HeaderComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </Header>
          <Layout className="layout">
            <div
              className={`overlay ${isMenuOpen ? "visible" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            />
            <Content className="content">{children}</Content>
          </Layout>
          <Footer>
            <FooterComponent />
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
