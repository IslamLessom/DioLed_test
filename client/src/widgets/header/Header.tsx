"use client";

import React from "react";
import styles from "./Header.module.scss";
import SearchComponents from "./ui/components/search/Search";
import PhoneComponent from "./ui/components/phone/Phone";
import Location from "./ui/components/location/Location";
import Stub from "./ui/components/other-features/Stub";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import NavMenu from "../nav-menu/ui/NavMenu";
import { BurgerButton } from "../../features/burger-button/BurgerButton";
import Image from "next/image";
import Link from "next/link";
import { Header } from "antd/es/layout/layout";

interface HeaderComponentProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 968px)");

  return (
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
      <div className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.header__burger}>
            <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          <Link href={"/"}>
            <Image src="/logo.svg" alt="logo" width={100} height={100} />
          </Link>
          <div className={styles.header__search}>
            <SearchComponents />
          </div>
          {!isMobile && (
            <>
              <Location />
            </>
          )}
          <PhoneComponent />
          <Stub />
        </div>
        <NavMenu />
      </div>
    </Header>
  );
};

export default HeaderComponent;
