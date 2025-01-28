import { useState } from "react";
import { loginUser, registerUser } from "./authAPI";
import { useRouter } from "next/router"; // Импортируем useRouter

const useAuth = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const router = useRouter(); // Инициализируем router

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      const userData = await loginUser({ username, password });
      console.log("Вход успешен:", userData);
      router.push("/profile");
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
      router.push("/profile");
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return { isLoginMode, toggleMode, handleLogin, handleRegister };
};

export default useAuth;
