"use client";

import React, { useState, useEffect } from "react";
import style from "./Liders.module.scss";

import ProductCard from "../../../../../shared/ui/product-card/ProductCard";
import { productsMockDate } from "../../../../../../mockDate";

const Liders = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(savedFavorites);
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
      {productsMockDate.slice(0, 3).map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          isFavorite={favorites.includes(product.id)}
          onFavoriteClick={(e) => toggleFavorite(e, product.id)}
        />
      ))}
    </div>
  );
};

export default Liders;
