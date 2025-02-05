import { MdOutlineTableBar } from "react-icons/md";
import {
  CustomMenuItem,
  MenuItem,
} from "../../../widgets/nav-menu/ui/model/types";

export const itemsMenu: CustomMenuItem[] = [
  {
    key: "sub1",
    label: "Камоды и люстры",
    links: "/lustra",
    icon: <MdOutlineTableBar />,
    children: [
      {
        key: "xg132",
        label: "Камоды",
        type: "group",
      },
      {
        key: "hfjgg2",
        label: "Люстры",
        type: "group",
      },
    ],
  },
  {
    key: "sub2",
    label: "Мебель для детской",
    links: "/svetilnik",
    icon: <MdOutlineTableBar />,

    children: [
      {
        key: "asdwg1",
        label: "Детские кровати",
        type: "group",
      },
      {
        key: "xcg2",
        label: "Детские комнаты",
        type: "group",
      },
    ],
  },
  {
    key: "sub3",
    label: "Мебель для кухни",
    links: "/bra",
    icon: <MdOutlineTableBar />,

    children: [
      {
        key: "uig1",
        label: "Кухонные гарнитуры",
        type: "group",
      },
      {
        key: "hfgg2",
        label: "Кухонные столы",
        type: "group",
      },
      {
        key: "hgfg2",
        label: "Кухонные шкафы",
        type: "group",
      },
      {
        key: "jfg2",
        label: "Обеденные уголки",
        type: "group",
      },
      {
        key: "ggg2",
        label: "Стулья и табуретки",
        type: "group",
      },
    ],
  },
  {
    key: "sub4",
    label: "Мебель для офиса",
    icon: <MdOutlineTableBar />,

    links: "/spoty",
  },
  {
    key: "sub5",
    label: "Мебель для ванной",
    icon: <MdOutlineTableBar />,

    links: "/natol-lamp",
    children: [
      {
        key: "g1fa",
        label: "Зеркала для ванной",
        type: "group",
      },
      {
        key: "g2asd",
        label: "Тумбы в ванную",
        type: "group",
      },

      {
        key: "g2fas",
        label: "Шкафы в ванную",
        type: "group",
      },
    ],
  },
  {
    key: "sub6",
    label: "Мебель для спальни",
    icon: <MdOutlineTableBar />,

    links: "/torsher",
    children: [
      {
        key: "g1asss",
        label: "Кровати",
        type: "group",
      },
      {
        key: "g2zxdd",
        label: "Спальные гарнитуры",
        type: "group",
      },
      {
        key: "g2dfg",
        label: "Туалетные столики",
        type: "group",
      },
    ],
  },
  {
    key: "sub7fs",
    label: "Стелажи",
    icon: <MdOutlineTableBar />,

    links: "/detsciy-svet",
  },
  {
    key: "sub8asd2",
    label: "Прихожие",
    icon: <MdOutlineTableBar />,

    links: "/texnicheskiy-svet",
  },
  {
    key: "sub9wwe",
    label: "Стенки для гостинной",
    icon: <MdOutlineTableBar />,

    links: "/elichnoe-osvechenie",
  },
  {
    key: "sub11",
    label: "Столы",
    icon: <MdOutlineTableBar />,

    links: "/style-loft",
    children: [
      {
        key: "g1kk",
        label: "Столы журнальные",
        type: "group",
      },
      {
        key: "g2jj",
        label: "Столы компьютерные",
        type: "group",
      },
      {
        key: "g2ggh",
        label: "Столы письменные",
        type: "group",
      },
      {
        key: "g2bv",
        label: "Компьютерные кресла",
        type: "group",
      },
    ],
  },
  {
    key: "sub12",
    label: "Мебель",
    icon: <MdOutlineTableBar />,

    links: "/mebel",
    children: [
      {
        key: "gerw1",
        label: "Item 1",
        type: "group",
      },
      {
        key: "g2asf",
        label: "Item 2",
        type: "group",
      },
    ],
  },
  {
    key: "sub13",
    label: "Шкафы",
    icon: <MdOutlineTableBar />,

    links: "/zerkalo",
    children: [
      {
        key: "ghg1",
        label: "Шкафы встроенные",
        type: "group",
      },
      {
        key: "ggf2",
        label: "Шкафы радиусные",
        type: "group",
      },
    ],
  },
  {
    key: "232",
    label: "Распродажа",
    icon: <MdOutlineTableBar />,

    links: "/zerkalo",
    children: [
      {
        key: "gdasdw",
        label: "Шкафы встроенные",
        type: "group",
      },
      {
        key: "g2asd",
        label: "Шкафы радиусные",
        type: "group",
      },
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
