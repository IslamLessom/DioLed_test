import Image from "next/image";
import React from "react";
import ContactForm from "@/features/ContactForm/ui/ContactForm";
import styles from "./page.module.scss";
import TitleInPage from "@/shared/ui/TitleInPage/TitleInPage";

const Delivery = () => {
  return (
    <div className={styles.delivery}>
      <TitleInPage title="Доставка" />
      <Image
        className={styles.delivery__banner}
        src="/fabric_banner.jpg"
        alt="banner"
        width={100}
        height={100}
      />
      <div className={styles.delivery__description}>
        <p>
          Наша компания осуществляет доставку в пределах Москвы и МО. В пределах
          МКАД транспортировка до подъезда заказчика является бесплатной.
        </p>
        <p>Доставка осуществляется с 06:00 до 00:00.</p>
        <p>
          Оптовым клиентам предоставляется возможность заказать доставку по
          России посредством логистической компании.
        </p>
      </div>
      <div className={styles.delivery__sail}>
        <p>
          Товары из раздела Распродажа доставляются по 100% предоплате онлайн
        </p>
      </div>
      <div className={styles.delivery__pricy}>
        <p>
          <span>Стоимость доставки до подъезда </span>(при доставке за пределы
          МКАД минимальная стоимость - 200 руб).
        </p>
      </div>
      <div className={styles.delivery__pricy_about}>
        <div className={styles.delivery__info}>
          <p>
            <span>Процесс доставки заказа</span>
          </p>
          <p>
            Водитель-экспедитор доставит груз <br />
            Передаст его заказчику и предоставит все сопроводительные документы:
            счет-фактуру, накладные, гарантийные обязательства
            фабрики-изготовителя (талон) <br />
            Клиент оплачивает товар и его доставку
          </p>
        </div>
        <div className={styles.delivery__info}>
          <p>
            <span>Доступен самовывоз</span> (при 100% предоплате).
          </p>
          <p>
            Адрес нашего склада: ТВЦ ЭлитСтройМатериалы 2-й этаж, стенд F30, МО
            Одинцовский р-н, п. Заречье, ул. Торговая, стр. 2, 51 км (внешняя
            сторона МКАДа). Отгрузка товара ведется с 11 до 19 часов.
          </p>
        </div>
      </div>
      <ContactForm
        title="Сборка мебели - обратный звонок"
        description="При возникновении вопросов по сборке, оставьте заявку и мы свяжемся с вами в ближайшее время."
      />
    </div>
  );
};

export default Delivery;
