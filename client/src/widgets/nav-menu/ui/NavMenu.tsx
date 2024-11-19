import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import { items } from "./model/constants";
import styles from "./NavMenu.module.scss";
import { useScrollDirection } from "@/shared/hooks/useScrollDirection";

const NavMenu: React.FC = () => {
  const [current, setCurrent] = useState("mail");
  const isVisible = useScrollDirection();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className={`${styles.navMenu} ${!isVisible ? styles.hidden : ""}`}>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default NavMenu;
