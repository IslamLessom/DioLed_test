"use client";
import React, { useEffect, useState } from "react";
import styles from "./ComparisonPage.module.scss";
import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";
import Filtered from "../filtered/Filtered";
import ComprasionContainer from "../comprasion-container/ComprasionContainer";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ComparisonPage = () => {
  const [comparisonProducts, setComparisonProducts] = useState([]);
  const [products, setProducts] = useState([]);

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
    loadComparison();
  }, [products]);

  const loadComparison = () => {
    const favorites = JSON.parse(localStorage.getItem("comparison") || "[]");
    const favoriteItems = products.filter((product: any) =>
      favorites.includes(product.id)
    );
    setComparisonProducts(favoriteItems);
  };

  const handleRemoveFromFavorites = (productId: number) => {
    const favorites = JSON.parse(localStorage.getItem("comparison") || "[]");
    const newFavorites = favorites.filter((id: number) => id !== productId);
    localStorage.setItem("comparison", JSON.stringify(newFavorites));

    setComparisonProducts((prev: any) =>
      prev.filter((product: any) => product.id !== productId)
    );

    window.dispatchEvent(new Event("comparisonUpdated"));
  };
  return (
    <div className={styles.comparison}>
      <TitleInPage title="Сравнение товаров" />
      {/*<Filtered />*/}

      <ComprasionContainer
        comparisonProducts={comparisonProducts}
        onRemove={handleRemoveFromFavorites}
      />
    </div>
  );
};

export default ComparisonPage;
