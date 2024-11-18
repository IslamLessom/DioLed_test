import React from "react";
import styles from "./Header.module.scss";
import SearchComponents from "./ui/components/search/Search";
import PhoneComponent from "./ui/components/phone/Phone";
import Location from "./ui/components/location/Location";
import Stub from "./ui/components/other-features/Stub";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

const HeaderComponent = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.header}>
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
  );
};

export default HeaderComponent;
