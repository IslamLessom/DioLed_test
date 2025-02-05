"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./Map.module.scss";
const MapBlock = () => {
  const position = [55.545003, 37.586113]; // Пример координат (Москва)

  return (
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
  );
};

export default MapBlock;
