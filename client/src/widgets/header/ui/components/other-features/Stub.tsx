import React from "react";
import {
  BarChartOutlined,
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import styles from "./Stub.module.scss";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Link from "next/link";

const Stub = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className={styles.stub}>
      {!isMobile && (
        <>
          <Link href="/favorites">
            <Badge count={5}>
              <CiHeart />
            </Badge>
          </Link>
          <Link href="/comparison">
            <Badge count={5}>
              <IoPodiumOutline />
            </Badge>
          </Link>
          <Link href="/profile">
            <CiUser />
          </Link>
        </>
      )}
      <div className={styles.stub__cart}>
        <Badge count={5}>
          <Link href="/basket">
            <CiShoppingCart />
          </Link>
        </Badge>
        {!isMobile && <p className={styles.stub__cart_price}>1000 руб</p>}
      </div>
    </div>
  );
};

export default Stub;
