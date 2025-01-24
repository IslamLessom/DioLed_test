"use client";
import React, { useState } from "react";
import { FaFileCsv } from "react-icons/fa";
import styles from "./CsvFormaterExportButton.module.scss";

export const CsvFormaterExportButton: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleExport = async () => {
    try {
      const response = await fetch("http://localhost:8001/export-csv", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Ошибка при экспорте данных");
      }

      // Создаем ссылку для скачивания файла
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "products.csv"; // Имя файла
      document.body.appendChild(a);
      a.click();
      a.remove();
      setMessage("Экспорт завершен!");
    } catch (error) {
      console.error(error);
      setMessage("Ошибка при экспорте данных.");
    }
  };

  return (
    <div className={styles.exportContainer}>
      <FaFileCsv />
      <button onClick={handleExport}>Экспортировать в CSV</button>
      {message && <p>{message}</p>}
    </div>
  );
};
