import React from "react";
import {
  BarChartOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import styles from "./Stub.module.scss";

const Stub = () => {
  return (
    <div className={styles.stub}>
      <Badge count={5}>
        <HeartOutlined />
      </Badge>
      <Badge count={5}>
        <BarChartOutlined />
      </Badge>
      <UserOutlined />
      <div className={styles.stub__cart}>
        <Badge count={5}>
          <ShoppingOutlined />
        </Badge>
        <p className={styles.stub__cart_price}>1000 руб</p>
      </div>
    </div>
  );
};

export default Stub;
