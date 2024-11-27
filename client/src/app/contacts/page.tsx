import React from "react";
import styles from "./page.module.scss";
import { Button } from "antd";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__container}>
        <h1>Мы всегда на связи!</h1>
        <div className={styles.contacts__time}>
          <p>Пн-Пт 10:00 - 18:00</p>
          <p>время московское</p>
        </div>
        <div className={styles.contacts__number}>
          <p>
            <b>+7 (499)270-27-90</b> - Мосвка
          </p>
          <p>
            <b>+7 (499)270-27-90</b> - Тех-поддержка
          </p>
          <p>
            <b>+7 (499)270-27-90</b> - Менеджер
          </p>
        </div>
        <Button>Задать вопрос</Button>
        <div className={styles.contacts__adress}>
          <p>или напишите на почту info@verolight.ru</p>
          <p>Г.Москва ул.Островского 23</p>
        </div>
      </div>
      <div className={styles.contacts__blocks}>
        <div className={styles.contacts__block_demonstration}>
          <div className={styles.contacts__title}>
            <FaChalkboardTeacher />
            <p>Демонстрация товара за 30 минут</p>
          </div>
          <p className={styles.contacts__description}>
            Специалисты проведут презентацию товара, покажут и расскажут о нем
          </p>
          <p className={styles.contacts_demo}>Записаться на демо</p>
        </div>
        <div className={styles.contacts__block_consultation}>
          <div className={styles.contacts__title}>
            <LuMessagesSquare />
            <p>Консультация специалиста по продажам</p>
          </div>
          <p className={styles.contacts__description}>
            Ответим на все ваши вопросы о стоимости продукта и подберем выгодный
            вариант продукта
          </p>
          <p className={styles.contacts_demo}>Записаться на демо</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
