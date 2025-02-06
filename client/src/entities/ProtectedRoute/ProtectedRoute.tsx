"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthHook from "../../features/auth/useAuthHook";

const ProtectedRoute = ({ children = null }: any) => {
  const { isAuthenticated, userRole } = useAuthHook();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      // Если не аутентифицирован, перенаправляем на страницу входа
      router.push("/auth");
    }

    if (userRole !== "admin") {
      if (!isAuthenticated) {
        router.push("/auth");
      } else {
        // Если пользователь не админ, перенаправляем на профиль
        router.push("/profile");
      }
    }
  }, []);

  return children; // Рендерим детей если все проверки пройдены
};

export default ProtectedRoute;
