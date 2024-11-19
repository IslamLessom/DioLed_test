import React from "react";
import MenuComponent from "./comonents/menu/Menu";
import Liders from "./comonents/liders/Liders";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <MenuComponent />
      <Liders />
    </div>
  );
};

export default Sidebar;
