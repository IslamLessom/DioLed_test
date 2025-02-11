import React from "react";
import styles from "./Orders.module.scss";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosCheckboxOutline } from "react-icons/io";
import { GrWorkshop } from "react-icons/gr";
import Link from "next/link";
export const Orders = () => {
  return (
    <div className={styles.orders}>
      <div className={styles.orders__add_order}>
        <CiSquarePlus />
        <p>Добавить заказ</p>
      </div>
      <div className={styles.orders__list_order}>
        <div className={styles.order__list_order__processing}>
          <div className={styles.order__list_order__container}>
            <GrWorkshop />
            <Link href={"./order"}>
              <p>Все заказы</p>
            </Link>
          </div>
          <p className={styles.order__list_order__ready__count}> 277</p>
        </div>
        <div className={styles.order__list_order__processing}>
          <div className={styles.order__list_order__container}>
            <GrWorkshop />
            <p>В процессе</p>
          </div>
          <p className={styles.order__list_order__ready__count}> 277</p>
        </div>
        <div className={styles.order__list_order__ready}>
          <div className={styles.order__list_order__container}>
            <IoIosCheckboxOutline />
            <p>Готовы</p>
          </div>
          <p className={styles.order__list_order__ready__count}>277</p>
        </div>
      </div>
    </div>
  );
};
