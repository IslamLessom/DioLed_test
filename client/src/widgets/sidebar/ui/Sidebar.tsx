"use client";

import React from "react";
import MenuComponent from "./comonents/menu/Menu";
import Liders from "./comonents/liders/Liders";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import styles from "./Sidebar.module.scss";

const Sidebar = ({ isMenuOpen }: any) => {
  const isMobile = useMediaQuery("(max-width: 1225px)");
  return (
    <div className={styles.sidebar}>
      <MenuComponent isMenuOpen={isMenuOpen} />

      {!isMobile && <Liders />}
    </div>
  );
};

export default Sidebar;
