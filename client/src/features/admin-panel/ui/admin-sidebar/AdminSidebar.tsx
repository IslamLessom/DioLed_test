import React from "react";
import { Orders } from "../../components/orders/Orders";
import { OrdersStatus } from "../../components";

const AdminSidebar = () => {
  return (
    <div>
      <Orders />
      <OrdersStatus />
    </div>
  );
};

export default AdminSidebar;
