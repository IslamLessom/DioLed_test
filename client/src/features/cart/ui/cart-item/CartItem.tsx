import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";
import React from "react";
import { SelectedItem } from "../selected-item/SelectedItem";
import CartForm from "../cart-form/CartForm";
import styled from "./CartItem.module.scss";

export const CartItem = () => {
  return (
    <div className={styled.cart}>
      <div className={styled.cart_title}>
        <TitleInPage title="Оформление заказа" />
      </div>
      <div className={styled.cart_container}>
        <SelectedItem />
        <CartForm />
      </div>
    </div>
  );
};
