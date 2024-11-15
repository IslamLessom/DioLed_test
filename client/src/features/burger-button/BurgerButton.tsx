"use client";

import { FC } from "react";
import cn from "classnames";
import styles from "./BurgerButton.module.scss";

interface BurgerButtonProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerButton: FC<BurgerButtonProps> = ({ isOpen, toggleMenu }) => (
  <button
    className={cn(styles.burgerButton, {
      [styles.open]: isOpen,
    })}
    onClick={toggleMenu}
  >
    <span />
    <span />
    <span />
  </button>
);
