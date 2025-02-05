"use client";
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import styles from "./BannerCarousel.module.scss";
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";

const BannerCarousel = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      {!isMobile && (
        <div className={styles.bannerCarousel}>
          <Carousel
            draggable={true}
            autoplay
            autoplaySpeed={3000}
            dotPosition="bottom"
            effect="fade"
          >
            <div className={styles.bannerCarousel__item}>
              <Image src="/baner2.jpg" alt="Image 1" width={800} height={200} />
            </div>
            <div className={styles.bannerCarousel__item}>
              <Image src="/baner2.jpg" alt="Image 2" width={800} height={200} />
            </div>
            <div className={styles.bannerCarousel__item}>
              <Image src="/baner2.jpg" alt="Image 3" width={800} height={200} />
            </div>
            <div className={styles.bannerCarousel__item}>
              <Image src="/baner2.jpg" alt="Image 4" width={800} height={200} />
            </div>
          </Carousel>
        </div>
      )}
    </>
  );
};

export default BannerCarousel;
