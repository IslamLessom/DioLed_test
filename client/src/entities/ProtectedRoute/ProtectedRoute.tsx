"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthHook from "../../features/auth/useAuthHook";

const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated, userRole } = useAuthHook();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Если не аутентифицирован, перенаправляем на страницу входа
      router.push("/auth");
    }

    if (userRole !== "admin") {
      // Если пользователь не админ, перенаправляем на профиль
      router.push("/profile");
    }
  }, []);

  return children; // Рендерим детей если все проверки пройдены
};

export default ProtectedRoute;
