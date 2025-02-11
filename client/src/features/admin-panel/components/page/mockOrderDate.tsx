export interface Order {
  id: string;
  number: string;
  totalPrice: number;
  username: string;
  date: string;
  status: "new" | "paid" | "shipped" | "completed";
  items: {
    product: string;
    quantity: number;
    total: number;
  }[];
  history: {
    date: string;
    event: string;
  }[];
}

export const mockOrders: Order[] = [
  {
    id: "1",
    number: "#100612305",
    totalPrice: 14222,
    username: "Aoksana86",
    date: "2 декабря 2024 18:13",
    status: "new",
    items: [
      {
        product: "Светильник CANDY (Модель E.)",
        quantity: 1,
        total: 14261.5,
      },
    ],
    history: [
      {
        date: "3 декабря 2024, 22:17",
        event:
          'Уведомление "Заказ оформлен" отправлено администратору магазина.',
      },
      {
        date: "3 декабря 2024, 22:17",
        event: "Пользователь 1381456 оформил заказ.",
      },
    ],
  },
  {
    id: "2",
    number: "#10060325",
    totalPrice: 14222,
    username: "Aoksana86",
    date: "2 декабря 2024 18:13",
    status: "new",
    items: [
      {
        product: "Светильник CANDY (Модель E.)",
        quantity: 1,
        total: 14261.5,
      },
    ],
    history: [
      {
        date: "3 декабря 2024, 22:17",
        event:
          'Уведомление "Заказ оформлен" отправлено администратору магазина.',
      },
      {
        date: "3 декабря 2024, 22:17",
        event: "Пользователь 1381456 оформил заказ.",
      },
    ],
  },
  {
    id: "3",
    number: "#10064205",
    totalPrice: 14222,
    username: "Aoksana8622",
    date: "2 декабря 2024 18:13",
    status: "new",
    items: [
      {
        product: "Светильник CANDY (Модель E.)",
        quantity: 1,
        total: 14261.5,
      },
    ],
    history: [
      {
        date: "3 декабря 2024, 22:17",
        event:
          'Уведомление "Заказ оформлен" отправлено администратору магазина.',
      },
      {
        date: "3 декабря 2024, 22:17",
        event: "Пользователь 1381456 оформил заказ.",
      },
    ],
  },
  {
    id: "4",
    number: "#100605",
    totalPrice: 14222,
    username: "Aoksana8644",
    date: "2 декабря 2024 18:13",
    status: "new",
    items: [
      {
        product: "Светильник CANDY (Модель E.)",
        quantity: 1,
        total: 14261.5,
      },
      {
        product: "Светильник CANDYss (Модель Eds.)",
        quantity: 1,
        total: 14261.5,
      },
      {
        product: "Светильник CANDYss (Модель Ea.)",
        quantity: 1,
        total: 14261.5,
      },
    ],
    history: [
      {
        date: "3 декабря 2024, 22:17",
        event:
          'Уведомление "Заказ оформлен" отправлено администратору магазина.',
      },
      {
        date: "3 декабря 2024, 22:17",
        event: "Пользователь 1381456 оформил заказ.",
      },
    ],
  },
];
