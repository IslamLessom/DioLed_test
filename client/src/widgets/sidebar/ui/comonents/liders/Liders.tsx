import React from "react";
import style from "./Liders.module.scss";
import { CiHeart, CiStar } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { Button } from "antd";
import Image from "next/image";
import ProductCard from "@/shared/ui/product-card/ProductCard";
const Liders = () => {
  return (
    <div className={style.lider}>
      <h3>Лидеры продаж</h3>

      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Liders;
