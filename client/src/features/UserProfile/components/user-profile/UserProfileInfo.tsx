import React from "react";
import Image from "next/image";
import styles from "./UserProfileInfo.module.scss";
import { Carousel } from "antd";
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
          <Carousel
            infinite
            draggable
            swipeToSlide
            slidesToShow={3}
            autoplay={false}
            responsive={[
              {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 1,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
            className={styles.profile__delivery_list__container__carousel}
          >
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default UserProfileInfo;
