"use client";

import { useState, useEffect, useRef } from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { BurgerButton } from "@/features/burger-button/BurgerButton";
import "@/shared/styles/globals.scss";
import "./layout.scss";
import HeaderComponent from "@/widgets/header/Header";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import FooterComponent from "@/widgets/footer/ui/Footer";

export default function RootLayout({
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
              padding: "0px 10px",
            }}
          >
            <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <HeaderComponent />
          </Header>
          <Layout
            className="layout"
            style={{
              marginTop: "90px",
              minHeight: "calc(100vh - 90px - 64px)",
            }}
          >
            <div
              className={`overlay ${isMenuOpen ? "visible" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            />
            <Sider
              ref={siderRef}
              width={isMenuOpen ? "60%" : "25%"}
              style={{
                height: "100vh ",
                backgroundColor: "#f7f7f7 ",
              }}
              className={isMenuOpen ? "mobile-visible" : "mobile-hidden"}
            >
              <Sidebar />
            </Sider>
            <Content style={{ padding: "20px", backgroundColor: "red" }}>
              {children}
            </Content>
          </Layout>
          <Footer>
            <FooterComponent />
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
