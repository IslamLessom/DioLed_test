"use client";
import React, { useState, useEffect, useRef } from "react";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ProductSimilarCard from "../product-similar-card/ProductSimilarCard";
import axios from "axios";
import styles from "./ProductSimilar.module.scss";
import { useMediaQuery } from "../../../../shared/hooks/useMediaQuery";
import Link from "next/link";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ProductSimilar = () => {
  const [current, setCurrent] = useState(0);
  const [randomProducts, setRandomProducts] = useState<any[]>([]);
  const carouselRef = useRef<any>(null); // Ссылка на компонент Carousel
  const isMobile = useMediaQuery("(max-width: 600px)");

  const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl ? apiUrl + "/" : ""}products/random-products`
        );
        const products = response.data;
        const shuffledProducts = shuffleArray(products);
        setRandomProducts(shuffledProducts.slice(0, 10));
      } catch (error) {
        console.error("Ошибка получения данных о товарах", error);
      }
    };

    fetchProducts();
  }, []);

  const handleNext = () => {
    if (carouselRef.current) {
      const nextIndex = (current + 1) % randomProducts.length;
      carouselRef.current.goTo(nextIndex);
      setCurrent(nextIndex);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const prevIndex =
        (current - 1 + randomProducts.length) % randomProducts.length;
      carouselRef.current.goTo(prevIndex);
      setCurrent(prevIndex);
    }
  };

  const onChange = (currentSlide: any) => {
    setCurrent(currentSlide);
  };

  console.log(randomProducts);
  return (
    <div className={styles.carouselWrapper}>
      <h1>Возможно вам понравится - </h1>
      <Carousel
        ref={carouselRef}
        className={styles.carousel}
        slidesToShow={!isMobile ? 2 : 1}
        beforeChange={(from, to) => setCurrent(to)}
        afterChange={onChange}
        centerMode
        infinite
        draggable={true}
      >
        {randomProducts.map((product: any, index: any) => (
          <div key={index}>
            <Link href={`/catalog/${product.id}`}>
              <ProductSimilarCard product={product} />
            </Link>
          </div>
        ))}
      </Carousel>

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

      <div className={styles.counter}>
        {current + 1}/{randomProducts.length}
      </div>
    </div>
  );
};

export default ProductSimilar;
