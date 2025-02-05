import React from "react";
import styles from "./page.module.scss";
import { Carousel } from "antd";
import Image from "next/image";
import MapBlock from "../../widgets/map/Map";

const ShowRoom = () => {
  return (
    <div className={styles.showroom}>
      <div className={styles.showroom_container}>
        <div className={styles.title}>
          <h1>Шоурум DioLed</h1>
          <hr />
        </div>
        <div className={styles.container_description}>
          <p className={styles.description}>
            Добро пожаловать в шоурум DioLed! Мы предлагаем широкий ассортимент
            современных люстр, которые идеально впишутся в любой интерьер. В
            нашем магазине вы найдете освещение для дома, офиса и любых
            коммерческих помещений. Приезжайте, чтобы увидеть коллекцию вживую!
          </p>
          <Image src="/bra.jpg" alt="Lustro" width={100} height={100} />
        </div>

        <div className={styles.carousel_container}>
          <Carousel draggable={true}>
            <div className={styles.slick_slide}>
              <Image src="/bra.jpg" alt="Lustro" width={100} height={100} />
            </div>
            <div className={styles.slick_slide}>
              <Image src="/bra.jpg" alt="Lustro" width={100} height={100} />
            </div>
            <div className={styles.slick_slide}>
              <Image src="/bra.jpg" alt="Lustro" width={100} height={100} />
            </div>
          </Carousel>
        </div>

        <h2 className={styles.subtitle}>Наше местоположение:</h2>
        <MapBlock />
      </div>
    </div>
  );
};

export default ShowRoom;
