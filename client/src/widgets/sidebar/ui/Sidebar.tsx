"use client";

import React from "react";
import MenuComponent from "./comonents/menu/Menu";
import Liders from "./comonents/liders/Liders";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={styles.sidebar}>
      <MenuComponent />

      {!isMobile && <Liders />}
    </div>
  );
};

export default Sidebar;
