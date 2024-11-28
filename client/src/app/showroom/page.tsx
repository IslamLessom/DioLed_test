"use client";
import React from "react";
import styles from "./page.module.scss";
import { Carousel } from "antd";
import Image from "next/image";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const ShowRoom = () => {
  const position = [55.545003, 37.586113]; // Пример координат (Москва)

  return (
    <div className={styles.showroom}>
      <div className={styles.showroom_container}>
        <h1 className={styles.title}>Шоурум DioLed</h1>
        <p className={styles.description}>
          Добро пожаловать в шоурум DioLed! Мы предлагаем широкий ассортимент
          современных люстр, которые идеально впишутся в любой интерьер. В нашем
          магазине вы найдете освещение для дома, офиса и любых коммерческих
          помещений. Приезжайте, чтобы увидеть коллекцию вживую!
        </p>

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
        <div className={styles.map_container}>
          <YMaps>
            <Map
              key="unique-map-key"
              defaultState={{
                center: position, // Координаты центра карты
                zoom: 14,
              }}
              width="100%"
              height="400px"
            >
              <Placemark
                geometry={position}
                properties={{
                  hintContent: "Наш шоурум",
                  balloonContent: "Адрес нашего шоурума в Москве",
                }}
              />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default ShowRoom;
