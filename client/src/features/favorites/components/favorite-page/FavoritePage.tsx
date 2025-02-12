"use client";

import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";
import React, { useEffect, useState } from "react";
import FilterProduct from "../filter-product/FilterProduct";
import FavoriteCard from "../favorite-card/FavoriteCard";
import { productsMockDate } from "../../../../../mockDate";
import styles from "./FavoritePage.module.scss";

export interface Product {
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

const FavoritePage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  const loadFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const favoriteItems = productsMockDate.filter((product) =>
      favorites.includes(product.id)
    );
    setFavoriteProducts(favoriteItems);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  const handleRemoveFromFavorites = (productId: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = favorites.filter((id: number) => id !== productId);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    loadFavorites();

    // Вызываем событие обновления избранного
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  if (favoriteProducts.length === 0) {
    return (
      <div className={styles.empty}>
        <TitleInPage title="Избранные товары" />
        <p>В избранном пока нет товаров</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <TitleInPage title="Избранные товары" />
      <FilterProduct />
      <div className={styles.products}>
        {favoriteProducts.map((product) => (
          <FavoriteCard
            key={product.id}
            product={product}
            onRemove={handleRemoveFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
