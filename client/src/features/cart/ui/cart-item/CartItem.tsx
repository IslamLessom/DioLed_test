"use client";
import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";
import React, { useEffect, useState, useCallback } from "react";
import { SelectedItem } from "../selected-item/SelectedItem";
import CartForm from "../cart-form/CartForm";
import styled from "./CartItem.module.scss";
import { productsMockDate } from "../../../../../mockDate";
import { Product } from "../../../favorites/components/favorite-page/FavoritePage";

export const CartItem = () => {
  const [busketProduct, setBusketProduct] = useState<Product[]>([]);
  const [totalSum, setTotalSum] = useState<number>(0);
  const [cartUpdateTrigger, setCartUpdateTrigger] = useState(0);

  const calculateTotalSum = useCallback((products: Product[]) => {
    const sum = products.reduce((acc, product: any) => {
      const cleanPrice = product.price.replace(/\s/g, "").replace(",", ".");
      return acc + Number(cleanPrice) * (product.quantity || 1);
    }, 0);
    setTotalSum(sum);
  }, []);

  const updateCart = useCallback(() => {
    setBusketProduct([]);
    setTotalSum(0);
    localStorage.setItem("busket", "[]");
    setCartUpdateTrigger((prev) => prev + 1);
    window.dispatchEvent(new Event("busketUpdated"));
  }, []);

  const loadBusket = useCallback(() => {
    const favorites = JSON.parse(localStorage.getItem("busket") || "[]");
    const favoriteItems = productsMockDate
      .filter((product) => favorites.includes(product.id))
      .map((product) => ({ ...product, quantity: 1 }));
    setBusketProduct(favoriteItems);
    calculateTotalSum(favoriteItems);
  }, [calculateTotalSum]);

  useEffect(() => {
    loadBusket();
  }, [loadBusket, cartUpdateTrigger]);

  useEffect(() => {
    const handleStorageChange = () => {
      loadBusket();
    };

    window.addEventListener("busketUpdated", handleStorageChange);
    return () =>
      window.removeEventListener("busketUpdated", handleStorageChange);
  }, [loadBusket]);

  const handleRemoveFromFavorites = (productId: number) => {
    const buskets = JSON.parse(localStorage.getItem("busket") || "[]");
    const newFavorites = buskets.filter((id: number) => id !== productId);
    localStorage.setItem("busket", JSON.stringify(newFavorites));
    updateCart();
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedProducts = busketProduct.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setBusketProduct(updatedProducts);
    calculateTotalSum(updatedProducts);
  };

  if (busketProduct.length === 0) {
    return (
      <div className={styled.empty}>
        <TitleInPage title="Оформление заказа" />
        <p>В корзине пока нет товаров</p>
      </div>
    );
  }

  return (
    <div className={styled.cart}>
      <div className={styled.cart_title}>
        <TitleInPage title="Оформление заказа" />
      </div>
      <div className={styled.cart_container}>
        <SelectedItem
          busketProduct={busketProduct}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
          onQuantityChange={handleQuantityChange}
          updateCart={updateCart}
        />
        <CartForm
          updateCart={updateCart}
          totalSum={totalSum}
          products={busketProduct}
        />
      </div>
    </div>
  );
};
