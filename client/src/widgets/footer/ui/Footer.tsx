import React from "react";
import styles from "./Footer.module.scss";
import { ContactInfo } from "@/widgets/contact-info/ui/ContactInfo";
import { FaVk, FaTelegram } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__logo__contacts}>
        <img src="logo.svg" alt="logo" />
        <div className={styles.footer__contacts}>
          <ContactInfo />
        </div>
        <div className={styles.footer__logo__contacts__social}>
          <FaVk />
          <FaTelegram />
        </div>
      </div>
      <div className={styles.footer__info}>
        <h3>Информация для покупателей</h3>
        <div className={styles.footer__info__links}>
          <div className={styles.footer__info__links__column}>
            <p>О компании</p>
            <p>Доставка и оплата</p>
            <p>Возврат и обмен</p>
            <p>Контакты</p>
            <p>Вакансии</p>
            <p>Реквизиты</p>
            <p>Скидки</p>
          </div>
          <div className={styles.footer__info__links__column}>
            <p>Акции</p>
            <p>Новости</p>
            <p>Сертификаты</p>
            <p>Отзывы</p>
            <p>Карта сайта</p>
            <p>Сервисные центры</p>
            <p>Гарантия</p>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <h3 className={styles.footer__copyright__title}>
          Реквизиты и контакты
        </h3>
        <p>ООО «Бэст-Мебель»</p>
        <p> ИНН/КПП: 3328006739/772101001</p>
        <p>ОГРН: 1153328003223</p>
      </div>
    </div>
  );
};

export default FooterComponent;
