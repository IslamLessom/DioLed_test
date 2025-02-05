import React, { useState } from "react";
import styles from "./Menu.module.scss";
import { itemsMenu } from "../../../model/item";
import { IoIosArrowDown } from "react-icons/io";

const MenuComponent: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (key: string) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  return (
    <nav className={styles.menu}>
      <h2 className={styles.menu__title}>Каталог мебели</h2>

      <ul className={styles.menu__list}>
        {itemsMenu.map((item) => (
          <li key={item.key} className={styles.menu__item}>
            <button
              className={`${styles.menu__button} ${
                openMenu === item.key ? styles.active : ""
              }`}
              onClick={() => toggleMenu(item.key)}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
              <span
                className={`${styles.arrow} ${
                  openMenu === item.key ? styles.arrowUp : ""
                }`}
              >
                <IoIosArrowDown />
              </span>
            </button>

            <div
              className={`${styles.submenuWrapper} ${
                openMenu === item.key ? styles.open : ""
              }`}
            >
              <ul className={styles.submenu}>
                {item.children?.map((child: any) => (
                  <li key={child.key} className={styles.submenu__item}>
                    {child.label}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuComponent;
