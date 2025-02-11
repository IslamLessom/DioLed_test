import React from "react";
import styles from "./OrderCard.module.scss";
import Image from "next/image";
import { Order } from "../page/mockOrderDate";

interface OrderCardProps {
  order: Order;
  onClick: (order: Order) => void;
}

export const OrderCard: React.FC<OrderCardProps> = ({ order, onClick }) => {
  return (
    <div className={styles.order_card} onClick={() => onClick(order)}>
      <div className={styles.card}>
        <Image src="/bra.jpg" height={100} width={100} alt="ava" />
        <div className={styles.card__info}>
          <div className={styles.card__info_container}>
            <p className={styles.card__info_container_number}>{order.number}</p>
            <p>{order.totalPrice}$</p>
          </div>
          <p>{order.username}</p>
          <p>{order.date}</p>
        </div>
      </div>
    </div>
  );
};
