"use client";
import React from "react";
import { Button, Select } from "antd";
import styles from "./Filtered.module.scss";
import CheckboxSelect from "../../../../shared/ui/checkbox-select/CheckboxSelect";
const Filtered = () => {
  const options = [
    { label: "Элемент 1", value: "item1" },
    { label: "Элемент 2", value: "item2" },
    { label: "Элемент 3", value: "item3" },
  ];

  const handleSelectChange = (selectedItems: any) => {
    console.log("Выбранные элементы:", selectedItems);
  };
  return (
    <div className={styles.filtered}>
      <CheckboxSelect
        title="О товаре"
        options={options}
        onChange={handleSelectChange}
      />
      <CheckboxSelect
        title="Фурнитура"
        options={options}
        onChange={handleSelectChange}
      />
      <CheckboxSelect
        title="Цвета"
        options={options}
        onChange={handleSelectChange}
      />
      <CheckboxSelect
        title="Размеры"
        options={options}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default Filtered;
