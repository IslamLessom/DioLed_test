import { VscListUnordered } from "react-icons/vsc";
import styles from "./OrderStatus.module.scss";
import { ImUpload } from "react-icons/im";
import { FcShipped } from "react-icons/fc";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoThumbsUpOutline } from "react-icons/io5";

const OrderStatus = () => {
  // Текущий активный статус (можно менять динамически, например, из API)
  const currentStatus = "Shipped";

  const statuses = [
    {
      name: "Оформление",
      icon: <VscListUnordered />,
      description: "Ваш заказ на оформлении",
      active: false,
    },
    {
      name: "Загрузка",
      icon: <ImUpload />,
      description: "Сейчас мы загружаем ваш товар.",
      active: true,
    },
    {
      name: "Отправка",
      icon: <FaShippingFast />,
      description: "Ваш заказ спешит к вам.",
      active: false,
    },
    {
      name: "Доставлен",
      icon: <MdOutlineDeliveryDining />,
      description: "Мы доставили заказ. Ура!!",
      active: false,
    },
    {
      name: "Успех!",
      icon: <IoThumbsUpOutline />,
      description: "Вы забрали заказ и все остались довольны",
      active: false,
    },
  ];

  return (
    <div className={styles.orderStatus}>
      <div className={styles.timeline}>
        {statuses.map((status, index) => (
          <div
            key={index}
            className={`${styles.step} ${
              status.active == true ? styles.active : ""
            }`}
          >
            <div className={styles.iconWrapper}>
              <div className={styles.icon}>{status.icon}</div>
              {index < statuses.length - 1 && (
                <div className={styles.arrow}></div>
              )}
            </div>
            <div className={styles.label}>{status.name}</div>
            <div className={styles.description}>{status.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatus;
