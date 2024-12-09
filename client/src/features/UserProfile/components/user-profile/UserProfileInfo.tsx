import React from "react";
import Image from "next/image";
import styles from "./UserProfileInfo.module.scss";
const UserProfileInfo = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <Image src="/bra.jpg" alt="" width={100} height={100} />
        <div className={styles.profile__info}>
          <h2>Islam Gasanow</h2>
          <p>mem.m.1979@mail.ru</p>
        </div>
      </div>
      <div className={styles.profile__delivery_list}>
        <h2>Мои заказы</h2>
        <div className={styles.profile__delivery_list__container}>
          <p>Люстра - настольная</p>
          <p className={styles.profile__delivery_list__container__actibve}>
            Люстра - детская
          </p>
          <p>Бра - итальянская</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
