import { useState, useEffect } from "react";

export const useBusketCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Начальная загрузка
    const busket = JSON.parse(localStorage.getItem("busket") || "[]");
    setCount(busket.length);

    // Слушатель изменений localStorage
    const handleStorageChange = () => {
      const favorites = JSON.parse(localStorage.getItem("busket") || "[]");
      setCount(favorites.length);
    };

    window.addEventListener("storage", handleStorageChange);

    // Создаем кастомное событие для обновления счетчика
    window.addEventListener("busketUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("busketUpdated", handleStorageChange);
    };
  }, []);

  return count;
};
