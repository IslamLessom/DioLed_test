import React from "react";
import styles from "./ProductFormBuy.module.scss";
import { Button } from "antd";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";

const ProductFormBuy = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__container}>
        <h1 className={styles.contacts__title}>Мы всегда на связи!</h1>
        <div className={styles.contacts__time}>
          <p>Пн-Пт 10:00 - 18:00</p>
          <p>время московское</p>
        </div>
        <div className={styles.contacts__number}>
          <div className={styles.contacts__phone}>
            <p>
              <b>+7 (499) 270-27-90</b> - Москва
            </p>
          </div>
          <div className={styles.contacts__phone}>
            <p>
              <b>+7 (499) 270-27-90</b> - Тех-поддержка
            </p>
          </div>
          <div className={styles.contacts__phone}>
            <p>
              <b>+7 (499) 270-27-90</b> - Менеджер
            </p>
          </div>
        </div>
        <Button className={styles.contacts__button}>Задать вопрос</Button>
        <div className={styles.contacts__adress}>
          <p>
            или напишите на почту{" "}
            <a href="mailto:info@verolight.ru">info@verolight.ru</a>
          </p>
          <p>Г. Москва, ул. Островского 23</p>
        </div>
      </div>
      <div className={styles.contacts__blocks}>
        <div className={styles.contacts__block}>
          <div className={styles.contacts__icon}>
            <FaChalkboardTeacher />
          </div>
          <h3>Демонстрация товара за 30 минут</h3>
          <p>
            Специалисты проведут презентацию товара, покажут и расскажут о нем.
          </p>
          <Button className={styles.contacts__demo}>Записаться на демо</Button>
        </div>
        <div className={styles.contacts__block}>
          <div className={styles.contacts__icon}>
            <LuMessagesSquare />
          </div>
          <h3>Консультация специалиста по продажам</h3>
          <p>
            Ответим на все ваши вопросы о стоимости продукта и подберем выгодный
            вариант продукта.
          </p>
          <Button className={styles.contacts__demo}>Записаться на демо</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFormBuy;
