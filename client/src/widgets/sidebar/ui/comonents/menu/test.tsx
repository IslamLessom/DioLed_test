import React from "react";
import { Menu } from "antd";
import styles from "./Menu.module.scss";
import { itemsMenu } from "../../../model/item";
import Link from "next/link";

const { SubMenu } = Menu;

const MenuComponent: React.FC = () => {
  return (
    <nav className={styles.menu}>
      <h2 className={styles.menu__title}>Каталог мебели</h2>

      <Menu mode="inline">
        {itemsMenu.map((item: any) =>
          item.children ? (
            <SubMenu
              key={item.key}
              title={
                <span className={styles.icon}>
                  {item.icon} {item.label}
                </span>
              }
            >
              {item.children.map((child: any) =>
                child.children ? (
                  <SubMenu
                    key={child.key}
                    title={
                      <span className={styles.icon}>
                        {child.icon} {child.label}
                      </span>
                    }
                  >
                    {child.children.map((subChild: any) => (
                      <Menu.Item key={subChild.key}>
                        <span className={styles.icon}>
                          {subChild.icon} {subChild.label}
                        </span>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={child.key}>
                    <span className={styles.icon}>
                      {child.icon} {child.label}
                    </span>
                  </Menu.Item>
                )
              )}
            </SubMenu>
          ) : (
            <Menu.Item key={item.key}>
              {item.links ? (
                <Link href={item.links}>
                  <span className={styles.icon}>
                    {item.icon} {item.label}
                  </span>
                </Link>
              ) : (
                <>
                  <span className={styles.icon}>
                    {item.icon} {item.label}
                  </span>
                </>
              )}
            </Menu.Item>
          )
        )}
      </Menu>
    </nav>
  );
};

export default MenuComponent;
