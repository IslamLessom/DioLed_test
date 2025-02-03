"use client";

import React from "react";
import MenuComponent from "./comonents/Menu/Menu";
import Liders from "./comonents/Liders/Liders";
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
