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
      >
        {itemsMenu.map((item) => (
          <Menu.Item key={item.key}>
            {item.links ? (
              <Link href={item.links}>{item.label}</Link>
            ) : (
              item.label // Если ссылки нет, просто отображаем текст
            )}
          </Menu.Item>
        ))}
      </Menu>
    </nav>
  );
};

export default MenuComponent;
