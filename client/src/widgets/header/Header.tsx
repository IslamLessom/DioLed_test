import React from "react";
import styles from "./Header.module.scss";
import SearchComponents from "./ui/components/search/Search";
import PhoneComponent from "./ui/components/phone/Phone";
import Location from "./ui/components/location/Location";
import Stub from "./ui/components/other-features/Stub";
const HeaderComponent = () => {
  return (
    <div className={styles.header}>
      <img src="logo.svg" alt="logo" />
      <SearchComponents />
      <Location />
      <PhoneComponent />
      <Stub />
    </div>
  );
};

export default HeaderComponent;
