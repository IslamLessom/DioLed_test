import React from "react";
import styles from "./Header.module.scss";
import SearchComponents from "./ui/components/search/Search";
import PhoneComponent from "./ui/components/phone/Phone";
import Location from "./ui/components/location/Location";
import Stub from "./ui/components/other-features/Stub";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import NavMenu from "../nav-menu/ui/NavMenu";
import { BurgerButton } from "@/features/burger-button/BurgerButton";

interface HeaderComponentProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  isMenuOpen,
  toggleMenu,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__burger}>
          <BurgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <img src="logo.svg" alt="logo" />
        <div className={styles.header__search}>
          <SearchComponents />
        </div>
        {!isMobile && (
          <>
            <Location />
          </>
        )}
        <PhoneComponent />
        <Stub />
      </div>
      {!isMobile && <NavMenu />}
    </div>
  );
};

export default HeaderComponent;
