import React from "react";
import style from "./Liders.module.scss";
import { CiHeart, CiStar } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import { Button } from "antd";
const Liders = () => {
  return (
    <div className={style.lider}>
      <h3>Лидеры продаж</h3>
      <div className={style.card}>
        <img src="example.jpg" alt="" />
        <div className={style.card__info}>
          <p>25 000</p>
          <p>Комод Шайн 23 глянцевый BMS</p>
          <div className={style.card__stars}>
            <CiStar />
            <p>4.5</p>
          </div>
          <div className={style.card__options}>
            <CiHeart />
            <IoPodiumOutline />
            <Button>Подробнее</Button>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <img src="example.jpg" alt="" />
        <div className={style.card__info}>
          <p>25 000</p>
          <p>Комод Шайн 23 глянцевый BMS</p>
          <div className={style.card__stars}>
            <CiStar />
            <p>4.5</p>
          </div>
          <div className={style.card__options}>
            <CiHeart />
            <IoPodiumOutline />
            <Button>Подробнее</Button>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <img src="example.jpg" alt="" />
        <div className={style.card__info}>
          <p>25 000</p>
          <p>Комод Шайн 23 глянцевый BMS</p>
          <div className={style.card__stars}>
            <CiStar />
            <p>4.5</p>
          </div>
          <div className={style.card__options}>
            <CiHeart />
            <IoPodiumOutline />
            <Button>Подробнее</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Liders;
