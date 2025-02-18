"use client";
import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";
import React, { useEffect, useState, useCallback } from "react";
import { SelectedItem } from "../selected-item/SelectedItem";
import CartForm from "../cart-form/CartForm";
import styled from "./CartItem.module.scss";
import { Product } from "../../../favorites/components/favorite-page/FavoritePage";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const CartItem = () => {
  const [busketProduct, setBusketProduct] = useState([]);
  const [totalSum, setTotalSum] = useState<number>(0);
  const [cartUpdateTrigger, setCartUpdateTrigger] = useState(0);

  const calculateTotalSum = useCallback(() => {
    const sum = busketProduct.reduce((acc: number, product: any) => {
      const cleanPrice = parseFloat(
        (product.base_price || "0")
          .toString()
          .replace(/\s/g, "")
          .replace(",", ".")
      );
      return acc + cleanPrice * (product.quantity ?? 1);
    }, 0);
    setTotalSum(sum);
  }, [busketProduct]);

  const updateCart = useCallback(() => {
    setBusketProduct([]);
    setTotalSum(0);
    localStorage.setItem("busket", "[]");
    setCartUpdateTrigger((prev) => prev + 1);
    window.dispatchEvent(new Event("busketUpdated"));
  }, []);

  const loadBusket = useCallback(() => {
    const storedBusket = JSON.parse(localStorage.getItem("busket") || "[]");
    axios
      .get(`http://188.225.77.249:3001/products/random-products`)
      .then((response) => {
        const products = response.data.filter((product: Product) =>
          storedBusket.includes(product.id)
        );
        setBusketProduct(
          products.map((product: any) => ({ ...product, quantity: 1 }))
        );
      })
      .catch((error) => {
        console.error("Ошибка загрузки товаров:", error);
      });
  }, []);

  useEffect(() => {
    loadBusket();
  }, [cartUpdateTrigger, loadBusket]);

  useEffect(() => {
    calculateTotalSum();
  }, [busketProduct]);

  useEffect(() => {
    const handleStorageChange = () => {
      loadBusket();
    };
    window.addEventListener("busketUpdated", handleStorageChange);
    return () =>
      window.removeEventListener("busketUpdated", handleStorageChange);
  }, [loadBusket]);

  const handleRemoveFromBusket = (productId: any) => {
    const updatedBusket = busketProduct.filter(
      (product: any) => product.id !== productId
    );
    localStorage.setItem(
      "busket",
      JSON.stringify(updatedBusket.map((p: any) => p.id))
    );
    setBusketProduct(updatedBusket);
    calculateTotalSum();
    window.dispatchEvent(new Event("busketUpdated"));
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedProducts: any = busketProduct.map((product: any) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setBusketProduct(updatedProducts);
    calculateTotalSum();
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
          handleRemoveFromFavorites={handleRemoveFromBusket}
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
