"use client";
import React, { useEffect, useState } from "react";
import { OrderCard } from "../order-card/OrderCard";
import { AdminDetail } from "../../ui/admin-deteil/AdminDetail";
import { mockOrders, Order } from "../page/mockOrderDate";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const OrderPageComponents = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(`http://188.225.77.249:3001/orders`);

        setOrders([...response.data]);
      } catch (error: any) {
        console.error(error);
        setError(error.message || "Произошла ошибка при загрузке заказов.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleOrderDeleted = (orderId: number) => {
    setOrders((prevOrders) =>
      prevOrders.filter((order) => order.id !== orderId)
    );
    setSelectedOrder(null);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
      <div>
        {isLoading ? (
          <div>Загрузка заказов...</div>
        ) : error ? (
          <div>Ошибка: {error}</div>
        ) : (
          orders.map((order: any) => (
            <OrderCard
              key={order.id}
              order={order}
              onClick={handleOrderClick}
            />
          ))
        )}
      </div>
      <AdminDetail order={selectedOrder} onOrderDeleted={handleOrderDeleted} />
    </div>
  );
};

export default OrderPageComponents;
