"use client";

import React, { useState } from "react";
import { Button } from "antd";
import styles from "./SocialButton.module.scss";
import { DownOutlined } from "@ant-design/icons";

const SocialButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <Button
        type="primary"
        shape="circle"
        className={styles.mainButton}
        onClick={toggleMenu}
      >
        <DownOutlined />
      </Button>
      {isOpen && (
        <div className={styles.menu}>
          <a href="https://viber.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/viber.png" alt="Viber" />
          </a>
          <a
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/telegram.png" alt="Telegram" />
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/vk.png" alt="VK" />
          </a>
          <a
            href="https://wechat.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/wechat.png" alt="WeChat" />
          </a>
        </div>
      )}
    </div>
  );
};

export default SocialButton;
