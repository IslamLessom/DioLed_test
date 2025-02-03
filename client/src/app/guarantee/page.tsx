import React from "react";
import TitleInPage from "../../shared/ui/title-in-page/TitleInPage";
import Image from "next/image";
import { SiAdguard, SiMoneygram } from "react-icons/si";
import { BsFillCalendarDateFill } from "react-icons/bs";
import styles from "./page.module.scss";
import ContactForm from "../../features/contact-form/ui/ContactForm";
const Guarantee = () => {
  return (
    <div className={styles.guarantee}>
      <TitleInPage title="Гарантия и возврат мебели" />
      <div className={styles.guarantee__container}>
        <Image
          src="/fabric_banner.jpg"
          alt="banner"
          width={100}
          height={100}
          className={styles.guarantee__banner}
        />
        <div className={styles.guarantee_infos}>
          <div className={styles.guarantee_info}>
            <div className={styles["feature-icon"]}>
              <SiMoneygram />
            </div>
            <div className={styles["feature-title"]}>
              Не понравилась мебель - вернем деньги!
            </div>
          </div>
          <div className={styles.guarantee_info}>
            <div className={styles["feature-icon"]}>
              <SiAdguard />
            </div>
            <div className={styles["feature-title"]}>
              Гарантия на все товары - 18 месяцев!
            </div>
          </div>
          <div className={styles.guarantee_info}>
            <div className={styles["feature-icon"]}>
              <BsFillCalendarDateFill />
            </div>
            <div className={styles["feature-title"]}>
              Срок службы мебели - составляет 10 лет!
            </div>
          </div>
        </div>
      </div>
      <div className={styles.guarantee__rules}>
        <div className={styles.guarantee__rules__block}>
          <h2>Правила возврата</h2>
          <p>
            Если вам не подошла мебель по тем или иным причинам, Вы вправе
            отказаться от товара в течение 7 дней после его получения. Главные
            критерии возврата: товарный вид, целостность упаковки, сохранены
            потребительские свойства, а также сопроводительные документы в
            соответствие с п.4 ст. 26.1 Закона «О защите прав потребителей».
          </p>
          <ul>
            <p className={styles.guarantee__rules__block__title}>
              <b>Возврату не подлежит</b>
            </p>
            <li>Расходные комплектующие (лампы, фильтры и пр.).</li>
            <li>Мебель, выполненная по индивидуальному проекту.</li>
            <li>
              Мебель, утратившая товарный вид и/или бывшая в употреблении:
              собранная и установленная корпусная мебель, использовавшаяся
              мягкая мебель и матрасы.
            </li>
          </ul>
          <p>
            Для возврата товара необходимо связаться с гарантийным отделом по
            номеру +7 (499) 110-71-19 или отправить заявку на почту
            garant@bestmebelshop.ru При соблюдении указанных условий мы готовы в
            течение 10 дней с момента обращения забрать у Вас мебель и вернуть
            оплаченные деньги с удержанием расходов продавца на доставку от
            потребителя возвращенного товара. Суммы удержаний определяются
            продавцом и зависят от региона места нахождения покупателя.
          </p>
        </div>
        <div className={styles.guarantee__rules__block}>
          <h2>
            <span className={styles.guarantee__rules__block_line}>
              При обнаружении брака:
            </span>
          </h2>
          <p>
            Если покупатель приобрел некачественный товар дистанционно, его
            права не должны нарушаться, как и при покупках в обычной торговой
            сети.
          </p>

          <p>
            Покупатель имеет полное право на осмотр покупки. Закон предоставляет
            ему возможность ознакомления с качественными характеристиками
            товара. Он должен посчитать количество единиц, указанных в
            документах сопровождения.
          </p>
          <p>
            Обнаружив брак или неполный комплект товара, клиент может позвонить
            по телефону +7 (499) 110-71-19 в гарантийный отдел с 9-00 до 18-00 и
            рассказать о своей проблеме диспетчеру.
          </p>
          <p>
            Другой способ – заполнение специальной формы «Заявки в гарантийный
            отдел» в разделе Мои заказы. Опишите бракованное изделие, его
            детали, прикрепите к заявке фотографии (по инструкции здесь).
          </p>
          <p>
            Срок службы мебели, установленный производителем, составляет 10 лет.
          </p>
        </div>
      </div>
      <ContactForm
        title="Отдел гарантии - обратный звонок"
        description="При возникновении вопросов по порядку возврата или гарантии, оставьте заявку и мы свяжемся с вами в ближайшее время."
      />
    </div>
  );
};

export default Guarantee;
