import { LayoutProfile } from "../components";

export const adminPanel = [
  {
    key: "1",
    label: "Заказы",
    children: (
      <>
        {" "}
        <LayoutProfile />
      </>
    ),
  },
  {
    key: "2",
    label: "Товары",
    children: (
      <>
        <LayoutProfile />
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
