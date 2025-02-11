import React, { useState } from "react";
import { OrderCard } from "../order-card/OrderCard";
import { AdminDetail } from "../../ui/admin-deteil/AdminDetail";
import { mockOrders, Order } from "../page/mockOrderDate";

const OrderPageComponents = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  return (
    <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
      <div>
        {mockOrders.map((order: any) => (
          <OrderCard key={order.id} order={order} onClick={handleOrderClick} />
        ))}
      </div>
      <AdminDetail order={selectedOrder} />
    </div>
  );
};

export default OrderPageComponents;
