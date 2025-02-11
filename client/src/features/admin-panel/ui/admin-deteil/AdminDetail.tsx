import { Steps, Table, Typography, Tag, Button, Space } from "antd";
import styles from "./AdminDetail.module.scss";
import { Order } from "../../../../features/admin-panel/components/page/mockOrderDate";

interface AdminDetailProps {
  order: Order | null;
}

export const AdminDetail: React.FC<AdminDetailProps> = ({ order }) => {
  if (!order) return <div>Выберите заказ для просмотра деталей</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Заказ {order.number}</h1>
      </div>

      <div className={styles.details}>
        <h1>Детали заказа</h1>
        <Table
          columns={[
            { title: "Товар", dataIndex: "product", key: "product" },
            { title: "Кол-во", dataIndex: "quantity", key: "quantity" },
            { title: "Итог", dataIndex: "total", key: "total" },
          ]}
          dataSource={order.items}
          pagination={false}
          bordered
        />
        <div className={styles.summary}>
          <p>Итого: </p> {order.totalPrice} ₽
        </div>
      </div>

      <div className={styles.history}>
        <h1>История выполнения заказа</h1>
        {order.history.map((event, index) => (
          <div key={index} className={styles.event}>
            <p>
              {event.date}: {event.event}
            </p>
          </div>
        ))}
      </div>

      <Space>
        <Button type="primary">Добавить комментарий</Button>
        <Button type="default">Назад</Button>
      </Space>
    </div>
  );
};
