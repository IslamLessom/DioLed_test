"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/shared/ui/ProductCard/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./page.module.scss";

const CategoryPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname(); // Получаем текущий путь

  const products = [
    { id: 1, name: "Товар 1", price: 13322 },
    { id: 2, name: "Товар 2", price: 15000 },
    { id: 3, name: "Товар 3", price: 20000 },
    { id: 4, name: "Товар 4", price: 25000 },
    { id: 5, name: "Товар 5", price: 30000 },
  ];

  return (
    <div className={styles.category}>
      {products.map((product, index) => (
        <div
          key={product.id}
          className={styles.category__card}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link href={`${pathname}/${product.id}`}>
            <ProductCard />
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
              <p>Высота: {product.price}</p>
              <p>Ширина: {product.price}</p>
              <p>Материал: {product.price}</p>
              <p>Кол. ламп: {product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
