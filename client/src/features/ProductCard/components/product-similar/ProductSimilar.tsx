"use client";
import React, { useState, useRef } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ProductSimilarCard from "../product-similar-card/ProductSimilarCard";
import styles from "./ProductSimilar.module.scss";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

const ProductSimilar = ({ products }: any) => {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef<any>(null); // Ссылка на компонент Carousel
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleNext = () => {
    if (carouselRef.current) {
      const nextIndex = (current + 1) % products.length;
      carouselRef.current.goTo(nextIndex); // Используем goTo для перехода к следующему слайду
      setCurrent(nextIndex);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const prevIndex = (current - 1 + products.length) % products.length;
      carouselRef.current.goTo(prevIndex); // Используем goTo для перехода к предыдущему слайду
      setCurrent(prevIndex);
    }
  };

  const onChange = (currentSlide: any) => {
    setCurrent(currentSlide);
  };

  return (
    <div className={styles.carouselWrapper}>
      <h1>Возможно вам понравится - </h1>
      <Carousel
        ref={carouselRef} // Передаем ссылку на Carousel
        className={styles.carousel}
        slidesToShow={!isMobile ? 2 : 1}
        beforeChange={(from, to) => setCurrent(to)}
        afterChange={onChange}
        centerMode
        infinite
        draggable={true}
      >
        {products.map((product: any, index: any) => (
          <div key={index}>
            <ProductSimilarCard product={product} />
          </div>
        ))}
      </Carousel>

      {/* Навигационные кнопки */}
      <div className={styles.navButtons}>
        <Button
          icon={<LeftOutlined />}
          onClick={handlePrev}
          className={styles.navButton}
        />
        <Button
          icon={<RightOutlined />}
          onClick={handleNext}
          className={styles.navButton}
        />
      </div>

      {/* Счетчик слайдов */}
      <div className={styles.counter}>
        {current + 1}/{products.length}
      </div>
    </div>
  );
};

export default ProductSimilar;
