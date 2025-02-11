import React from "react";
import styles from "./OrdersStatus.module.scss";
import { MdOutlineNewReleases } from "react-icons/md";
import Link from "next/link";
export const OrdersStatus = () => {
  return (
    <div className={styles.status}>
      <h2 className={styles.status__title}>Статусы заказов</h2>
      <div className={styles.status__container}>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Новый</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Возврат</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Отказ</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Подтвержден</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Оплачен</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Отправлен</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Выполнен</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Удален</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <p>Готов к выдаче</p>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
      </div>
      <h2 className={styles.status__title}>Заявки</h2>
      <div className={styles.status__container}>
        <div className={styles.status__container__menu}>
          <div className={styles.status__container__menu__box}>
            <MdOutlineNewReleases />
            <Link href={"/admin/application"}>
              <p>Заявка</p>
            </Link>
          </div>
          <p className={styles.status__container__menu__continer}>100</p>
        </div>
      </div>
    </div>
  );
};
