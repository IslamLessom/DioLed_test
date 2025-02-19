"use client";
import React from "react";
import Link from "next/link";

import { useMediaQuery } from "../../../../../shared/hooks/useMediaQuery";
import { useBusketCount } from "../../../../../shared/hooks/useBusketCount";

import { Badge } from "antd";
import { CiShoppingCart } from "react-icons/ci";

import styles from "./Stub.module.scss";
import { useComparisonCount } from "../../../../../shared/hooks/useComparisonCount";
import MenuFeauteres from "../../../../../shared/ui/menu-feauteres/MenuFeauteres";

const Stub = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 968px)");
  const isPriceBusket = useMediaQuery("(max-width: 1208px)");

  const busketCount = useBusketCount();

  return (
    <>
      {!isMobile && (
        <>
          {" "}
          {!isTablet && (
            <>
              <MenuFeauteres />
            </>
          )}
        </>
      )}
      <div className={styles.stub__cart}>
        <Badge count={busketCount}>
          <Link href="/basket">
            <CiShoppingCart className={styles.icon} />
          </Link>
        </Badge>
        {/* {!isPriceBusket && <p className={styles.stub__cart_price}>1000 руб</p>}*/}
      </div>
    </>
  );
};

export default Stub;
