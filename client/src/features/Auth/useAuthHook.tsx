import { useState } from "react";
import { loginUser, registerUser } from "./authAPI";
import { useRouter } from "next/navigation"; // Импортируем useRouter
import { useAuth } from "@/features/Auth/context/AuthProvider"; // Импортируем контекст

const useAuthHook = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const router = useRouter(); // Инициализируем router
  const { login, logout, isAuthenticated, userRole } = useAuth(); // Получаем метод login из контекста

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      const userData = await loginUser({ username, password });
      console.log("Вход успешен:", userData);

      // Убедитесь, что userData содержит поле role
      if (userData && userData.user && userData.user.role) {
        login(userData.user.role); // Передаем роль при входе
        if (userData.user.role === "admin") {
          router.push("/admin"); // Перенаправляем админа на админ-панель
        } else {
          router.push("/profile"); // Перенаправляем обычного пользователя на профиль
        }
      } else {
        console.error("Роль пользователя не найдена");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const userData = await registerUser({ username, email, password });
      console.log("Регистрация успешна:", userData);
      //login(); // Вызываем метод login из контекста
      router.push("/profile");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return {
    isLoginMode,
    toggleMode,
    handleLogin,
    handleRegister,
    logout,
    login,
    isAuthenticated,
    userRole,
  };
};

export default useAuthHook; // Переименуйте экспорт для ясности
