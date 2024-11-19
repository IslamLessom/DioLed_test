import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuItem } from "./types";

export const items: MenuItem[] = [
  {
    label: "Каталог",
    key: "mail",
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          { label: "Option 3", key: "setting:3" },
          { label: "Option 4", key: "setting:4" },
        ],
      },
    ],
  },
  {
    label: "О компании",
    key: "kompany",
  },
  {
    label: "Оплата",
    key: "payment",
  },
  {
    label: "Доставка",
    key: "delivery",
  },
  {
    label: "Сборка",
    key: "assembly",
  },
  {
    label: "Гарантия",
    key: "garanty",
  },
  {
    label: "Шоу-рум",
    key: "showroom",
  },
  {
    label: "Контакты",
    key: "contacts",
  },
  {
    label: "Дизайнеры",
    key: "designers",
  },
];
