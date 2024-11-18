import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer__logo__contacts}>
        <img src="logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
