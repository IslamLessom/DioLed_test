import { useState, useEffect } from "react";

export const useComparisonCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const busket = JSON.parse(localStorage.getItem("comparison") || "[]");
    setCount(busket.length);

    // Слушатель изменений localStorage
    const handleStorageChange = () => {
      const favorites = JSON.parse(localStorage.getItem("comparison") || "[]");
      setCount(favorites.length);
    };

    window.addEventListener("storage", handleStorageChange);

    // Создаем кастомное событие для обновления счетчика
    window.addEventListener("comparisonUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("comparisonUpdated", handleStorageChange);
    };
  }, []);

  return count;
};
