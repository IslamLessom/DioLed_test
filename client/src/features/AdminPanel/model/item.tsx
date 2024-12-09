import { LayoutProfile } from "../components";
import { AdminDetail } from "../ui/admin-deteil/AdminDetail";
import AdminListShop from "../ui/admin-list-shop/AdminListShop";
import AdminAllProduct from "../ui/AdminAllProducts/AdminAllProduct";

export const adminPanel = [
  {
    key: "1",
    label: "Заказы",
    children: (
      <>
        {" "}
        <LayoutProfile
          children={
            <div style={{ display: "grid", gridTemplateColumns: "30% 70%" }}>
              <AdminListShop />
              <AdminDetail />
            </div>
          }
        />
      </>
    ),
  },
  {
    key: "2",
    label: "Товары",
    children: (
      <>
        <LayoutProfile
          children={
            <>
              <AdminAllProduct />
            </>
          }
        />
      </>
    ),
  },
];

export const steps = [
  { title: "Новый", status: "process" },
  { title: "Оплачен" },
  { title: "Отправлен" },
  { title: "Выполнен" },
];

export const columns = [
  { title: "Товар", dataIndex: "product", key: "product" },
  { title: "Кол-во", dataIndex: "quantity", key: "quantity" },
  { title: "Итог", dataIndex: "total", key: "total" },
];

export const data = [
  {
    key: "1",
    product: "Светильник CANDY (Модель E.)",
    quantity: 1,
    total: "14 261,50 ₽",
  },
];
