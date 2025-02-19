import React from "react";
import styles from "./page.module.scss";
import { Button } from "antd";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import MapBlock from "../../widgets/map/Map";
import TitleInPage from "../../shared/ui/title-in-page/TitleInPage";
import {
  MailOutlined,
  ClockCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const Contacts = () => {
  return (
    <>
      <div className={styles.contacts}>
        <div className={styles.contacts__container}>
          <h1>Мы всегда на связи!</h1>
          <div className={styles.contacts__time}>
            <p>Пн-Пт 10:00 - 18:00</p>
            <p>время московское</p>
          </div>
          <div className={styles.contacts__number}>
            <div className={styles.contacts__phone}>
              <p>
                <b>+7 (499)270-27-90</b>
              </p>
              <p>Москва</p>
            </div>
            <div className={styles.contacts__phone}>
              <p>
                <b>+7 (499)270-27-90</b>
              </p>
              <p>Тех-поддержка</p>
            </div>
            <div className={styles.contacts__phone}>
              <p>
                <b>+7 (499)270-27-90</b>
              </p>
              <p>Менеджер</p>
            </div>
          </div>

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
          </div>
          <div className={styles.contacts__block_consultation}>
            <div className={styles.contacts__title}>
              <LuMessagesSquare />
              <p>Консультация специалиста по продажам</p>
            </div>
            <p className={styles.contacts__description}>
              Ответим на все ваши вопросы о стоимости продукта и подберем
              выгодный вариант продукта
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container_otdels}>
        <TitleInPage title="Отделы и службы:" />
        <div className={styles.container_otdels_info}>
          <div className={styles.contacts__block}>
            <h3>Отдел рекламаций:</h3>
            <p>
              При обращении в гарантийный отдел, пожалуйста, обязательно
              указывайте номер заказа в теме письма и прикладывайте
              фото-подтверждение брака изделия.
            </p>
            <div className={styles.contacts__info}>
              <div className={styles.contacts__item}>
                <PhoneOutlined className={styles.icon} />
                <span>
                  <b>+7 (499) 110-71-19</b>
                </span>
              </div>
              <div className={styles.contacts__item}>
                <ClockCircleOutlined className={styles.icon} />
                <span>
                  пн-вс: <b>9.00 до 21.00</b>
                </span>
              </div>
              <div className={styles.contacts__item}>
                <MailOutlined className={styles.icon} />
                <span>
                  <a href="mailto:garant@bestmebelshop.ru">
                    garant@bestmebelshop.ru
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.contacts__block}>
            <h3>Отдел доставки:</h3>
            <p>
              В пределах МКАД транспортировка до подъезда заказчика является
              бесплатной.
            </p>
            <div className={styles.contacts__info}>
              <div className={styles.contacts__item}>
                <PhoneOutlined className={styles.icon} />
                <span>
                  <b>+7 (499) 110-93-96</b>
                </span>
              </div>
              <div className={styles.contacts__item}>
                <ClockCircleOutlined className={styles.icon} />
                <span>
                  пн-вс: <b>9.00 до 21.00</b>
                </span>
              </div>
              <div className={styles.contacts__item}>
                <MailOutlined className={styles.icon} />
                <span>
                  <a href="mailto:delivery@bestmebelshop.ru">
                    delivery@bestmebelshop.ru
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.map_block}>
        <TitleInPage title="Адрес шоу-рума:" />
        <MapBlock />
      </div>
    </>
  );
};

export default Contacts;
