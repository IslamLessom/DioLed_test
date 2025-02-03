import React from "react";
import { Button } from "antd";
import styles from "./Phone.module.scss";
import { useMediaQuery } from "../../../../../shared/hooks/useMediaQuery";
import { PhoneOutlined } from "@ant-design/icons";
import { FiPhone } from "react-icons/fi";
import { PiPhoneThin } from "react-icons/pi";
import { ContactInfo } from "../../../../../widgets/contact-info/ContactInfo";

const PhoneComponent = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.phone}>
      {!isMobile ? (
        <>
          <ContactInfo />
        </>
      ) : (
        <PiPhoneThin className={styles.phone__icon} />
      )}
    </div>
  );
};

export default PhoneComponent;
