import { FurnitureCategory } from "../../widgets/furniture-categories/model/types";
import styles from "../../widgets/furniture-categories/ui/furniture-grid/FurnitureGrid.module.scss";

export const FURNITURE_CATEGORIES: FurnitureCategory[] = [
  {
    id: "1",
    title: "Люстры",
    image: "/lustra.jpg",
    price: 1780,
    href: "/lustra",
  },
  {
    id: "2",
    title: "Светильники",
    image: "/svetilnik.jpg",
    price: 1780,
    href: "/svetilnik",
  },
  {
    id: "3",
    title: "Бра",
    image: "/bra.jpg",
    price: 1780,
    href: "/bra",
  },
  {
    id: "4",
    title: "Настенные светильники",
    image: "/nasten_svet.jpg",
    price: 1780,
    href: "/naten_svet",
  },
  {
    id: "5",
    title: "Настольные лампы",
    image: "/nastol_lampa.jpg",
    price: 1780,
    href: "/nastol_lampa",
  },
  {
    id: "6",
    title: "Торшеры",
    image: "/torsher.jpg",
    price: 1780,
    href: "/torsher",
  },
  {
    id: "7",
    title: "Детское освешение",
    image: "/detskoe.jpg",
    price: 1780,
    href: "/detskoe",
  },
];

export const itemsFurnitureMenuOne = [
  {
    id: 1,
    title: "Комоды и тумбы",
    price: "от 1780 руб.",
    className: styles.yellow,
    image:
      "https://www.bestmebelshop.ru/upload/uf/d5c/d5c18e538516c2b95641278d97bc658b.png",
  },
  {
    id: 2,
    title: "Стеллажи",
    price: "от 1890 руб.",
    className: `${styles.pink} ${styles.big}`,
    image:
      "https://www.bestmebelshop.ru/upload/resize_cache/uf/e26/700_700_1/e263f150517935158546de5187412719.png",
  },
  {
    id: 3,
    title: "Мебель для детской",
    price: "от 3200 руб.",
    className: styles.green,
    image:
      "https://www.bestmebelshop.ru/upload/uf/c14/c145d55fa8a4b7b9037e0851018bd30d.png",
  },
  {
    id: 4,
    title: "Мебель для кухни",
    price: "от 7850 руб.",
    className: styles.lightpink,
    image:
      "https://www.bestmebelshop.ru/upload/uf/609/6095f81415882e815a5f52adb98b7988.png",
  },
  {
    id: 5,
    title: "Мебель для офиса",
    price: "от 2880 руб.",
    className: styles.lightorange,
    image:
      "https://www.bestmebelshop.ru/upload/uf/3d5/3d5312a09c1f2b777610ba0ccd9cc15b.png",
  },
  {
    id: 6,
    title: "Мебель для спальни",
    price: "от 3900 руб.",
    className: styles.beige,
    image:
      "https://www.bestmebelshop.ru/upload/resize_cache/uf/898/700_700_1/898158fc366f38d17b6386fb6211c266.png",
  },
];

export const itemsFurnitureMenuTwo = [
  {
    id: 2,
    title: "Стеллажи",
    price: "от 1890 руб.",
    className: `${styles.pink} ${styles.big}`,
    image:
      "https://www.bestmebelshop.ru/upload/resize_cache/uf/e26/700_700_1/e263f150517935158546de5187412719.png",
  },
  {
    id: 1,
    title: "Комоды и тумбы",
    price: "от 1780 руб.",
    className: styles.yellow,
    image:
      "https://www.bestmebelshop.ru/upload/uf/d5c/d5c18e538516c2b95641278d97bc658b.png",
  },
  {
    id: 6,
    title: "Мебель для спальни",
    price: "от 3900 руб.",
    className: styles.beige,
    image:
      "https://www.bestmebelshop.ru/upload/resize_cache/uf/898/700_700_1/898158fc366f38d17b6386fb6211c266.png",
  },
  {
    id: 3,
    title: "Мебель для детской",
    price: "от 3200 руб.",
    className: styles.green,
    image:
      "https://www.bestmebelshop.ru/upload/uf/c14/c145d55fa8a4b7b9037e0851018bd30d.png",
  },
  {
    id: 4,
    title: "Мебель для кухни",
    price: "от 7850 руб.",
    className: styles.lightpink,
    image:
      "https://www.bestmebelshop.ru/upload/uf/609/6095f81415882e815a5f52adb98b7988.png",
  },
  {
    id: 5,
    title: "Мебель для офиса",
    price: "от 2880 руб.",
    className: styles.lightorange,
    image:
      "https://www.bestmebelshop.ru/upload/uf/3d5/3d5312a09c1f2b777610ba0ccd9cc15b.png",
  },
];
export const itemsFurnitureMenuThree = [
  {
    id: 1,
    title: "Комоды и тумбы",
    price: "от 1780 руб.",
    className: styles.yellow,
    image:
      "https://www.bestmebelshop.ru/upload/uf/d5c/d5c18e538516c2b95641278d97bc658b.png",
  },

  {
    id: 2,
    title: "Мебель для детской",
    price: "от 1890 руб.",
    className: `${styles.pink}`,
    image:
      "https://www.bestmebelshop.ru/upload/uf/c14/c145d55fa8a4b7b9037e0851018bd30d.png",
  },

  {
    id: 3,
    title: "Cтеллажи",
    price: "от 3200 руб.",
    className: `${styles.green} ${styles.big}`,
    image:
      "https://www.bestmebelshop.ru/upload/resize_cache/uf/e26/700_700_1/e263f150517935158546de5187412719.png",
  },
  {
    id: 5,
    title: "Мебель для офиса",
    price: "от 3900 руб.",
    className: styles.lightorange,
    image:
      "https://www.bestmebelshop.ru/upload/uf/3d5/3d5312a09c1f2b777610ba0ccd9cc15b.png",
  },
  {
    id: 4,
    title: "Мебель для спальни",
    price: "от 3900 руб.",
    className: styles.beige,
    image:
      "https://www.bestmebelshop.ru/upload/resize_cache/uf/898/700_700_1/898158fc366f38d17b6386fb6211c266.png",
  },

  {
    id: 6,
    title: "Мебель для кухни",
    price: "от 7850 руб.",
    className: styles.lightpink,
    image:
      "https://www.bestmebelshop.ru/upload/uf/609/6095f81415882e815a5f52adb98b7988.png",
  },
];
