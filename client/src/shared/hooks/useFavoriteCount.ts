import { useState, useEffect } from "react";

export const useFavoriteCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Начальная загрузка
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setCount(favorites.length);

    // Слушатель изменений localStorage
    const handleStorageChange = () => {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setCount(favorites.length);
    };

    window.addEventListener("storage", handleStorageChange);

    // Создаем кастомное событие для обновления счетчика
    window.addEventListener("favoritesUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("favoritesUpdated", handleStorageChange);
    };
  }, []);

  return count;
};
