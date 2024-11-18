import React from "react";
import { Button } from "antd";
import styles from "./Phone.module.scss";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { PhoneOutlined } from "@ant-design/icons";
import { FiPhone } from "react-icons/fi";
import { PiPhoneThin } from "react-icons/pi";

const PhoneComponent = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.phone}>
      {!isMobile ? (
        <>
          <div className={styles.phone__number}>
            <p className={styles.phone__number_text}>+7 (495) 123-45-67</p>
            <p className={styles.phone__mail}>info@example.com</p>
          </div>
          <div className={styles.phone__button}>
            <Button>Заказать звонок</Button>
          </div>
        </>
      ) : (
        <PiPhoneThin className={styles.phone__icon} />
      )}
    </div>
  );
};

export default PhoneComponent;
