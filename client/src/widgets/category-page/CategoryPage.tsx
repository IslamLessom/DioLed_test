"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../../shared/ui/product-card/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { productsMockDate } from "../../../mockDate";
import styles from "./CategoryPage.module.scss";
import TitleInPage from "../../shared/ui/title-in-page/TitleInPage";

interface productsMockDate {
  id: number;
  name: string;
  price: string;
  materialBody: string;
  materialFacade: string;
  manufacturer: string;
  productionTime: string;
  warranty: string;
  lifting: boolean;
  assembly: boolean;
  article: string;
  deliveryMoscow: string;
  deliveryDate: string;
  description: string;
  reviews: {
    average: number;
    count: number;
  };
  rating: number;
  image: string;
}

const CategoryPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const [favorites, setFavorites] = useState<number[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    // Загружаем избранное при монтировании
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  const toggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.preventDefault(); // Предотвращаем переход по ссылке
    const newFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <>
      <div className={styles.title}>
        <TitleInPage title="Лампы" />
      </div>
      <div className={styles.category}>
        {productsMockDate.map((product: productsMockDate, index) => (
          <div
            key={product.id}
            className={styles.category__card}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link href={`${pathname}/${product.id}`}>
              <ProductCard
                {...product}
                isFavorite={favorites.includes(product.id)}
                onFavoriteClick={(e) => toggleFavorite(e, product.id)}
              />
            </Link>
            <div
              className={`${styles.category__card__description} ${
                hoveredIndex === index ? styles.visible : ""
              }`}
            >
              <div className={styles.category__card__description_image}>
                <Image src="/bra.jpg" width={100} height={100} alt="bra" />
                <Image src="/bra.jpg" width={100} height={100} alt="bra" />
                <Image src="/bra.jpg" width={100} height={100} alt="bra" />
              </div>
              <div className={styles.category__card__description_price}>
                <p>Высота: {product.manufacturer}</p>
                <p>Ширина: {product.name}</p>
                <p>Материал: {product.article}</p>
                <p>Кол. ламп: {product.assembly}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
