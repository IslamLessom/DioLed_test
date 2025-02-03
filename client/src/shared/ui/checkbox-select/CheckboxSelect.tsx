"use client";

import React, { useState } from "react";
import { Select, Checkbox } from "antd";
import styles from "./CheckboxSelect.module.scss";

interface Option {
  value: string;
  label: string;
}

const CheckboxSelect = ({
  options,
  onChange,
  title,
}: {
  options: Option[];
  onChange: (selected: string[]) => void;
  title: string;
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (checked: boolean, value: string) => {
    const updatedSelectedItems = checked
      ? [...selectedItems, value]
      : selectedItems.filter((item) => item !== value);

    setSelectedItems(updatedSelectedItems);
    onChange?.(updatedSelectedItems);
  };

  return (
    <Select
      className={styles.checkboxSelect}
      dropdownRender={(menu) => (
        <div className={styles.dropdownContent}>
          {options.map((option) => (
            <div className={styles.item} key={option.value}>
              <Checkbox
                checked={selectedItems.includes(option.value)}
                onChange={(e) =>
                  handleCheckboxChange(e.target.checked, option.value)
                }
              >
                {option.label}
              </Checkbox>
            </div>
          ))}
        </div>
      )}
      placeholder={title}
    />
  );
};

export default CheckboxSelect;
