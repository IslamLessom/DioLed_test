import React from "react";

import { Menu } from "antd";
import styles from "./Menu.module.scss";
import { itemsMenu } from "../../../model/item";
import Link from "next/link";

const MenuComponent: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <h2>Каталог мебели</h2>

      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={itemsMenu.map((item) => ({
          key: item.key,
          label: <Link href={item.links}>{item.label}</Link>,
          type: "item",
        }))}
      />
    </nav>
  );
};

export default MenuComponent;
