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
  const [busket, setBusket] = useState<number[]>([]);
  const [comparision, setComparision] = useState<number[]>([]);
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
          `http://188.225.77.249:3001/products/random-products`
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

  const toggleComparison = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    setComparision((prevComparison) => {
      const newComparison = prevComparison.includes(productId)
        ? prevComparison.filter((id) => id !== productId)
        : [...prevComparison, productId];

      localStorage.setItem("comparison", JSON.stringify(newComparison));
      window.dispatchEvent(new Event("comparisonUpdated"));

      return newComparison;
    });
  };

  const toggleBusket = (e: React.MouseEvent, productId: number) => {
    e.preventDefault();
    const newBuskets = busket.includes(productId)
      ? busket.filter((id) => id !== productId)
      : [...busket, productId];
    setBusket(newBuskets);
    localStorage.setItem("busket", JSON.stringify(newBuskets));
    window.dispatchEvent(new Event("busketUpdated"));
  };
  return (
    <div className={style.lider}>
      <h3>Лидеры продаж</h3>
      {products.map((product: any) => (
        <ProductCard
          {...product}
          isFavorite={favorites.includes(product.id)}
          onFavoriteClick={(e) => toggleFavorite(e, product.id)}
          isBusket={busket.includes(product.id)}
          onBusketClick={(e) => toggleBusket(e, product.id)}
          isComparision={comparision.includes(product.id)}
          onComparisionClick={(e) => toggleComparison(e, product.id)}
        />
      ))}
    </div>
  );
};

export default Liders;
