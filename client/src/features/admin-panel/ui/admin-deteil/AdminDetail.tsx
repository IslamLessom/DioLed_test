import { Steps, Table, Typography, Tag, Button, Space, message } from "antd";
import styles from "./AdminDetail.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../../../favorites/components/favorite-page/FavoritePage";

interface AdminDetailProps {
  order: any | null;
  onOrderDeleted?: (orderId: number) => void; // Добавляем пропс для коллбэка
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const AdminDetail: React.FC<AdminDetailProps> = ({
  order,
  onOrderDeleted,
}) => {
  const [productData, setProductData] = useState<{ [key: number]: any }>({});

  useEffect(() => {
    if (!order) return;

    const fetchProducts = async () => {
      try {
        const productPromises = order.OrderItems.map(async (item: any) => {
          try {
            const response = await axios.get(
              `http://188.225.77.249:3001/products/${item.product_id}`
            );
            return { [item.product_id]: response.data };
          } catch (error) {
            console.error(
              `Ошибка получения продукта ${item.product_id}:`,
              error
            );
            return { [item.product_id]: null };
          }
        });

        const productsArray = await Promise.all(productPromises);
        const productMap = Object.assign({}, ...productsArray);

        setProductData(productMap);
      } catch (error) {
        console.error("Ошибка загрузки данных о продуктах:", error);
      }
    };

    fetchProducts();
  }, [order]);

  if (!order) return <div>Выберите заказ для просмотра деталей</div>;

  const tableData = order.OrderItems.map((item: any) => {
    const product = productData[item.product_id];
    return {
      key: item.product_id,
      product: product ? product?.product_name : "Загрузка...",
      quantity: item.quantity,
      total: product ? item?.quantity * item?.price : "Загрузка...",
    };
  });

  const tableDataInfo = order
    ? {
        key: order.product_id, //Берем ключ из первого элемента
        phone: order.phone,
        address: order.address, // Берем address из первого элемента
        comments: order.comments,
      }
    : {
        key: "defaultKey", // Или любое другое значение по умолчанию
        phone: "Загрузка...",
        address: "Загрузка...",
        comments: "Загрузка...",
      };

  const handleDeleteOrder = async () => {
    try {
      await axios.delete(`http://188.225.77.249:3001/orders/${order.id}`); // Замените на ваш API-endpoint
      message.success(`Заказ ${order.id} успешно удален`);
      if (onOrderDeleted) {
        onOrderDeleted(order.id); // Вызываем коллбэк, чтобы сообщить родителю об удалении
      }
    } catch (error) {
      console.error("Ошибка удаления заказа:", error);
      message.error("Не удалось удалить заказ");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Заказ {order.id}</h1>
      </div>

      <div className={styles.details}>
        <h1>Детали заказа</h1>
        <Table
          columns={[
            { title: "Товар", dataIndex: "product", key: "product" },
            { title: "Кол-во", dataIndex: "quantity", key: "quantity" },
            { title: "Итог", dataIndex: "total", key: "total" },
          ]}
          dataSource={tableData}
          pagination={false}
          bordered
        />
      </div>

      <div className={styles.header}>
        <div className={styles.details}>
          <h1>Детали заказа</h1>
          <h3>
            Заказчик {order.username} {order.firstname}
          </h3>
          <Table
            columns={[
              { title: "Номер телефона", dataIndex: "phone", key: "phone" },
              { title: "Адрес", dataIndex: "address", key: "address" },
              { title: "Комментарий", dataIndex: "comments", key: "comments" },
            ]}
            dataSource={[tableDataInfo]}
            pagination={false}
            bordered
          />
        </div>
      </div>

      <div className={styles.summary}>
        <p>Итого: </p> {order.total_sum} ₽
      </div>

      {/*
      <div className={styles.history}>
        <h1>История выполнения заказа</h1>
      </div>
      <Space>
      <Button type="primary">Добавить комментарий</Button>
      <Button type="default">Назад</Button>
      </Space>
      */}
      <Space>
        <Button
          className={styles.buttonDelete}
          onClick={handleDeleteOrder}
          type="primary"
        >
          Удалить
        </Button>
      </Space>
    </div>
  );
};
