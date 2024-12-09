import TitleInPage from "@/shared/ui/TitleInPage/TitleInPage";
import React from "react";
import { SelectedItem } from "../selected-item/SelectedItem";
import CartForm from "../cart-form/CartForm";
import styled from "./CartItem.module.scss";

export const CartItem = () => {
  return (
    <div className={styled.cart}>
      <TitleInPage title="Оформление заказа" />
      <div className={styled.cart_container}>
        <SelectedItem />
        <CartForm />
      </div>
    </div>
  );
};
