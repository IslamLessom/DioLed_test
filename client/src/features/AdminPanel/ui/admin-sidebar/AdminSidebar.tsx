import React from "react";
import { Orders } from "../../components/Orders/Orders";
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
