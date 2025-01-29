import { Steps, Table, Typography, Tag, Button, Space } from "antd";
import styles from "./AdminDetail.module.scss";
import { data } from "../../model/item";

import { columns } from "../../model/item";
import { steps } from "../../model/item";
import Title from "antd/es/typography/Title";

export const AdminDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Заказ #100605</h1>
        {/*<Steps current={0}>
          {steps.map((step, index) => (
            <Steps.Step key={index} title={step.title} />
          ))}
        </Steps>
        */}
      </div>

      <div className={styles.details}>
        <h1>Детали заказа</h1>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
        <div className={styles.summary}>
          <p>Подытог: </p> 14 261,50 ₽
          <br />
          <p>Итого: </p> 14 261,50 ₽
        </div>
      </div>

      <div className={styles.history}>
        <h1>История выполнения заказа</h1>
        <div className={styles.event}>
          <p>
            3 декабря 2024, 22:17: Уведомление "Заказ оформлен" отправлено
            администратору магазина.
          </p>
        </div>
        <div className={styles.event}>
          <p>3 декабря 2024, 22:17: Пользователь 1381456 оформил заказ.</p>
        </div>
      </div>

      <Space>
        <Button type="primary">Добавить комментарий</Button>
        <Button type="default">Назад</Button>
      </Space>
    </div>
  );
};
