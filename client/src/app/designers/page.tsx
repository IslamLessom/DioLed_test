import React from "react";
import styles from "./page.module.scss";
import TitleInPage from "@/shared/ui/title-in-page/TitleInPage";
import Image from "next/image";
import ContactForm from "@/features/contact-form/ui/ContactForm";

const Designers = () => {
  return (
    <div className={styles.designers}>
      <TitleInPage title="Партнерская программа DioLed для дизайнеров и архитекторов" />
      <Image src="/fabric_banner.jpg" width={100} height={100} alt="banner" />
      <div className={styles.designers_container}>
        <div className={styles.designers_container_info}>
          <p className={styles.designers_container_info_text_title}>
            Мы предлагаем взаимовыгодное сотрудничество для студий дизайна и
            архитектуры, которое открывает уникальные возможности для воплощения
            вашего творческого потенциала. Работая с нами, вы получаете не
            только превосходную мебель, но и надежного партнера, готового
            поддержать ваши проекты на всех этапах. Вместе мы создадим
            интересные интерьеры, которые оставят незабываемые впечатления.
          </p>
          <h2>Преимущества работы с нами:</h2>
          <div className={styles.designers_grid}>
            <div className={styles.designers_grid_item}>
              <p className={styles.designers_grid_item_number}>1</p>
              <p className={styles.designers_grid_item_text}>
                Скидки для юридических лиц 20%, для физических лиц 10% на все
              </p>
            </div>
            <div className={styles.designers_grid_item}>
              <p className={styles.designers_grid_item_number}>2</p>
              <p className={styles.designers_grid_item_text}>
                Скидки для юридических лиц 20%, для физических лиц 10% на все
              </p>
            </div>
            <div className={styles.designers_grid_item}>
              <p className={styles.designers_grid_item_number}>3</p>
              <p className={styles.designers_grid_item_text}>
                Скидки для юридических лиц 20%, для физических лиц 10% на все
              </p>
            </div>
            <div className={styles.designers_grid_item}>
              <p className={styles.designers_grid_item_number}>4</p>
              <p className={styles.designers_grid_item_text}>
                Скидки для юридических лиц 20%, для физических лиц 10% на все
              </p>
            </div>
            <div className={styles.designers_grid_item}>
              <p className={styles.designers_grid_item_number}>5</p>
              <p className={styles.designers_grid_item_text}>
                Скидки для юридических лиц 20%, для физических лиц 10% на все
              </p>
            </div>

            <div className={styles.designers_grid_item}>
              <p className={styles.designers_grid_item_number}>6</p>
              <p className={styles.designers_grid_item_text}>
                Скидки для юридических лиц 20%, для физических лиц 10% на все
              </p>
            </div>
            <div className={styles.designers_grid_item}>
              <p className={styles.designers_grid_item_number}>7</p>
              <p className={styles.designers_grid_item_text}>
                Скидки для юридических лиц 20%, для физических лиц 10% на все
              </p>
            </div>
          </div>
          <p className={styles.designers_container_info_text_description}>
            Сделайте каждое пространство уникальным с нашей мебелью. Не упустите
            возможность воплотить свои дизайнерские идеи с мастерством и
            качеством, которые так ценят наши клиенты. Закажите у нас уже
            сегодня и получите выгодные скидки на весь ассортимент. Сделаем ваш
            проект по-настоящему особенным!
          </p>
        </div>
        <div className={styles.designers_container_phone}>
          <ContactForm
            title="Оставьте заявку на сотрудничество"
            description="Ответим в ближайшее время!"
          />
        </div>
      </div>
    </div>
  );
};

export default Designers;
