"use client";
import { usePathname, useParams } from "next/navigation";
import OrderDetailPage from "../../../../app/admin/order/[product]/page";
import OrderPageComponents from "../page/orderPage";
import AdminApplicationComponents from "../../../../widgets/admin-application-components/AdminApplicationComponents";

export const AdminContent = () => {
  const pathname = usePathname();
  const params = useParams();
  return (
    <div>
      <div>
        {pathname === "/admin/order" && <OrderPageComponents />}
        {pathname === "/admin" && <OrderPageComponents />}
        {pathname === "/admin/orders/[id]" && (
          <OrderDetailPage id={params.product} />
        )}
        {pathname === "/admin/application" && <AdminApplicationComponents />}
      </div>
    </div>
  );
};
