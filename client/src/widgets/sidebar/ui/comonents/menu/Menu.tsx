import React, { useState, useEffect } from "react";
import styles from "./Menu.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import axios from "axios";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const MenuComponent: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [categories, setCategories] = useState<any[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  const toggleMenu = (key: string, hasChildren: boolean) => {
    if (hasChildren) {
      setOpenMenu(openMenu === key ? null : key);
    }
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          `http://188.225.77.249:3001/categories`
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  const categoriesToShow = showAll ? categories : categories.slice(0, 20);

  return (
    <nav className={styles.menu}>
      <h2 className={styles.menu__title}>Каталог мебели</h2>
      <ul className={styles.menu__list}>
        {categoriesToShow.map((item) => {
          const hasChildren = item.children && item.children.length > 0;

          return (
            <li key={item.key} className={styles.menu__item}>
              <button
                className={`${styles.menu__button} ${
                  openMenu === item.key ? styles.active : ""
                } ${hasChildren ? styles.hasChildren : ""}`}
                onClick={() => toggleMenu(item.key, hasChildren)}
              >
                <Link href={`${item.id}`}>
                  <span className={styles.label}>
                    {item.category_name.charAt(0).toUpperCase() +
                      item.category_name.slice(1).toLowerCase()}
                  </span>
                </Link>
                {hasChildren && (
                  <span
                    className={`${styles.arrow} ${
                      openMenu === item.key ? styles.arrowUp : ""
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                )}
              </button>

              {hasChildren && (
                <div
                  className={`${styles.submenuWrapper} ${
                    openMenu === item.key ? styles.open : ""
                  }`}
                >
                  <ul className={styles.submenu}>
                    {item.children.map((child: any) => (
                      <li key={child.key} className={styles.submenu__item}>
                        {child.label}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {categories.length > 20 && (
        <div
          className={styles.showMoreWrapper}
          onClick={toggleShowAll}
          style={{
            textAlign: "center",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <IoIosArrowDown
            className={`${styles.arrow} ${showAll ? styles.arrowUp : ""}`}
            style={{
              fontSize: "20px",
              transition: "transform 0.3s ease",
              transform: showAll ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default MenuComponent;
