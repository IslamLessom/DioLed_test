"use client";

import { useState, useEffect } from "react";
import "../shared/styles/globals.scss";
import HeaderComponent from "../widgets/header/Header";
import FooterComponent from "../widgets/footer/ui/Footer";
import { Layout } from "antd";
import ContentContainerLayout from "../widgets/content-container-layout/ContentContainerLayout";
import "./layout.scss";
import Advantages from "../widgets/advantages/ui/advantages/Advantages";
import ContactForm from "../features/contact-form/ui/ContactForm";
import { usePathname } from "next/navigation";
import { useHideComponents } from "../features/selectors/useHideComponents";

export default function RootLayoutClient({
  children = null,
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
    <Layout
      style={{
        minHeight: "100vh",
        zIndex: 1000,
        background: "white",
      }}
    >
      <HeaderComponent isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <ContentContainerLayout
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        children={children}
      />
      {!useHideComponents() && (
        <>
          <Advantages />
          <ContactForm
            title="Остались вопросы"
            description="Позвоните или напишите нашим менеджерам, они помогут грамотными советами по выбору именно той мебели, которая подойдет вашему помещению больше всего."
          />
        </>
      )}
      <FooterComponent />
    </Layout>
  );
}
