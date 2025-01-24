import React from "react";
import Image from "next/image";
import styles from "./UserProfileInfo.module.scss";
const UserProfileInfo = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <div className={styles.profile__container_left}>
          <Image src="/bra.jpg" alt="" width={100} height={100} />
          <div className={styles.profile__info}>
            <h2>Islam Gasanow</h2>
            <p>mem.m.1979@mail.ru</p>
          </div>
        </div>
      </div>
      <div className={styles.profile__delivery_list}>
        <div className={styles.profile__delivery_list__title}>мои заказы</div>
        <div className={styles.profile__delivery_list__container}>
          <div className={styles.profile__delivery_list__container__product}>
            <Image src="/bra.jpg" alt="" width={100} height={100} />
            <p>Angelpoise</p>
            <p>Бра</p>
            <h3>12.800$</h3>
          </div>
          <div className={styles.profile__delivery_list__container__product}>
            <Image src="/bra.jpg" alt="" width={100} height={100} />
            <p>Angelpoise</p>
            <p>Бра</p>
            <h3>12.800$</h3>
          </div>
          <div className={styles.profile__delivery_list__container__product}>
            <Image src="/bra.jpg" alt="" width={100} height={100} />
            <p>Angelpoise</p>
            <p>Бра</p>
            <h3>12.800$</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
