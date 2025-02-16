"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./Liders.module.scss";
import ProductCard from "../../../../../shared/ui/product-card/ProductCard";
import Link from "next/link";
import { usePathname } from "next/navigation";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Liders = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl ? apiUrl + "/" : ""}products/random-products`
        );
        const shuffled = response.data.sort(() => 0.5 - Math.random());
        setProducts(shuffled.slice(0, 3));
      } catch (error) {
        console.error("Ошибка загрузки данных о продуктах:", error);
      }
    };
    fetchProducts();
  }, []);

  const toggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    const newFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];

    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div className={style.lider}>
      <h3>Лидеры продаж</h3>
      {products.map((product: any) => (
        <Link key={product.id} href={`/category/${product.id}`}>
          <ProductCard
            {...product}
            isFavorite={favorites.includes(product.id)}
            onFavoriteClick={(e) => toggleFavorite(e, product.id)}
          />
        </Link>
      ))}
    </div>
  );
};

export default Liders;
