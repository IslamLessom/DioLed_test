import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./Menu.module.scss";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    label: "Люстры",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Дизайнерские люстры",
        type: "group",
        children: [
          { key: "1", label: "Итальянская люстра" },
          { key: "2", label: "Французская люстра" },
        ],
      },
      {
        key: "g2",
        label: "Классические люстры",
        type: "group",
        children: [
          { key: "3", label: "Российская люстра" },
          { key: "4", label: "Английская люстра" },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: "Подсветка",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Кухонная подсветка" },
      { key: "6", label: "Спальня" },
      {
        key: "sub3",
        label: "Подсветка",
        children: [
          { key: "7", label: "Светящиеся потолки" },
          { key: "8", label: "Светящиеся стены" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Настенные светильники",
    icon: <SettingOutlined />,
    children: [
      { key: "10", label: "Светящиеся стены" },
      { key: "11", label: "Светящиеся потолки" },
      { key: "12", label: "Светящиеся стены" },
    ],
  },
  {
    key: "grp",
    label: "Классика",
    type: "group",
    children: [
      { key: "13", label: "Классические люстры" },
      { key: "14", label: "Классические светильники" },
    ],
  },
];

const MenuComponent: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <div className={styles.menu}>
      <h2>Каталог мебели</h2>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default MenuComponent;
