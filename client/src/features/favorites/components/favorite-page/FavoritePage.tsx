import TitleInPage from "../../../../shared/ui/title-in-page/TitleInPage";
import React from "react";
import FilterProduct from "../filter-product/FilterProduct";
import CardProduct from "../card-product/CardProduct";

const FavoritePage = () => {
  return (
    <div>
      <TitleInPage title="Избранные товары" />
      <FilterProduct />
      <CardProduct />
    </div>
  );
};

export default FavoritePage;
