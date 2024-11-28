import React, { useState } from "react";

import { Menu } from "antd";
import { itemsNavMenu } from "./model/constants";
import { useScrollDirection } from "@/shared/hooks/useScrollDirection";
import Link from "next/link";

import type { MenuProps } from "antd";
import styles from "./NavMenu.module.scss";

const NavMenu: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const isVisible = useScrollDirection();

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  const renderMenuItems = (items: any) => {
    return items.map((item: any) => {
      if (item.children) {
        return {
          ...item,
          children: renderMenuItems(item.children),
        };
      }
      return {
        ...item,
        label: <Link href={`/${item.key}`}> {item.label}</Link>,
      };
    });
  };

  return (
    <div className={`${styles.navMenu} ${!isVisible ? styles.hidden : ""}`}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={renderMenuItems(itemsNavMenu)}
      />
    </div>
  );
};

export default NavMenu;
