import React from "react";

import { Menu } from "antd";
import styles from "./Menu.module.scss";
import { itemsMenu } from "../../../model/item";
const MenuComponent: React.FC = () => {
  //const onClick: MenuProps["onClick"] = (e) => {
  // console.log("click ", e);
  //};

  return (
    <nav className={styles.menu}>
      <h2>Каталог мебели</h2>

      <Menu
        //onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={itemsMenu}
      />
    </nav>
  );
};

export default MenuComponent;
