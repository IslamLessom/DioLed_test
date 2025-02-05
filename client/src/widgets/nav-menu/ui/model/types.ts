import type { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>["items"][number];

export interface CustomMenuItem {
  key: string; // Уникальный ключ для элемента
  label: string; // Отображаемый текст элемента
  links?: string; // Опциональное свойство для хранения ссылки
  icon?: any;
  children?: any;
}
