import { Steps, Table, Typography, Tag, Button, Space } from "antd";
import styles from "./AdminDetail.module.scss";
import { data } from "../../model/item";
import { columns } from "../../model/item";
import { steps } from "../../model/item";

const { Title, Text } = Typography;

export const AdminDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title level={2}>Заказ #100605</Title>
        <Steps current={0}>
          {steps.map((step, index) => (
            <Steps.Step key={index} title={step.title} />
          ))}
        </Steps>
      </div>

      <div className={styles.details}>
        <Title level={4}>Детали заказа</Title>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
        />
        <div className={styles.summary}>
          <Text strong>Подытог: </Text> 14 261,50 ₽
          <br />
          <Text strong>Итого: </Text> 14 261,50 ₽
        </div>
      </div>

      <div className={styles.history}>
        <Title level={4}>История выполнения заказа</Title>
        <div className={styles.event}>
          <Text>
            3 декабря 2024, 22:17: Уведомление "Заказ оформлен" отправлено
            администратору магазина.
          </Text>
        </div>
        <div className={styles.event}>
          <Text>
            3 декабря 2024, 22:17: Пользователь 1381456 оформил заказ.
          </Text>
        </div>
      </div>

      <Space>
        <Button type="primary">Добавить комментарий</Button>
        <Button type="default">Назад</Button>
      </Space>
    </div>
  );
};
