export interface Order {
  OrderItems: [
    {
      created_at: Date;
      id: number;
      order_id: number;
      price: number | null;
      product_id: number;
      quantity: number;
      updated_at: Date;
    }
  ];
  comments: string;
  address: string;
  created_at: Date;
  firstname: string;
  id: number;
  phone: string;
  status: string;
  total_sum: number;
  updated_at: Date;
  user_id: number;
  username: string;
}

export const mockOrders: any[] = [
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
