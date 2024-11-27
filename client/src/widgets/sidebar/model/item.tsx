import { MenuItem } from "@/widgets/nav-menu/ui/model/types";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const itemsMenu: MenuItem[] = [
  {
    key: "sub1",
    label: "Люстры",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        label: "Дизайнерские люстры",
        type: "group",
        children: [
          { key: "1", label: "Итальянская люстра" },
          { key: "2", label: "Французская люстра" },
        ],
      },
      {
        key: "g2",
        label: "Классические люстры",
        type: "group",
        children: [
          { key: "3", label: "Российская люстра" },
          { key: "4", label: "Английская люстра" },
        ],
      },
    ],
  },
  {
    key: "sub2",
    label: "Подсветка",
    icon: <AppstoreOutlined />,
    children: [
      { key: "5", label: "Кухонная подсветка" },
      { key: "6", label: "Спальня" },
      {
        key: "sub3",
        label: "Подсветка",
        children: [
          { key: "7", label: "Светящиеся потолки" },
          { key: "8", label: "Светящиеся стены" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Настенные светильники",
    icon: <SettingOutlined />,
    children: [
      { key: "10", label: "Светящиеся стены" },
      { key: "11", label: "Светящиеся потолки" },
      { key: "12", label: "Светящиеся стены" },
    ],
  },
  {
    key: "grp",
    label: "Классика",
    type: "group",
    children: [
      { key: "13", label: "Классические люстры" },
      { key: "14", label: "Классические светильники" },
    ],
  },
];

export const itemNav: MenuItem[] = [
  {
    label: "Каталог",
    key: "",
  },
  {
    label: "О компании",
    key: "kompany",
  },
  {
    label: "Доставка",
    key: "delivery",
  },
  {
    label: "Гарантия",
    key: "guarantee",
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
