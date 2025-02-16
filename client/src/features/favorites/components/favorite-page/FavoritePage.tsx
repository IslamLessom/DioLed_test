"use client";

import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";
import React, { useEffect, useState } from "react";
import FilterProduct from "../filter-product/FilterProduct";
import FavoriteCard from "../favorite-card/FavoriteCard";
import styles from "./FavoritePage.module.scss";
import axios from "axios";

export interface Product {
  quantity: number;
  id: number;
  name: string;
  price: string;
  image: string;
  reviews: {
    average: number;
    count: number;
  };
  rating: number;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const FavoritePage = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl ? apiUrl + "/" : ""}products/random-products`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    loadFavorites();
  }, [products]);

  const loadFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const favoriteItems = products.filter((product) =>
      favorites.includes(product.id)
    );
    setFavoriteProducts(favoriteItems);
  };

  // Функция удаления товара из избранного
  const handleRemoveFromFavorites = (productId: number) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const newFavorites = favorites.filter((id: number) => id !== productId);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    // Обновляем список избранных товаров вручную
    setFavoriteProducts((prev) =>
      prev.filter((product) => product.id !== productId)
    );

    // Вызываем событие обновления избранного
    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <div className={styles.container}>
      <TitleInPage title="Избранные товары" />
      {/*<FilterProduct />*/}
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
