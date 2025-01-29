"use client";
import { useRouter } from "next/navigation";
import useAuthHook from "../../features/Auth/useAuthHook";

const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated, userRole } = useAuthHook();
  const router = useRouter();

  console.log(userRole);
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    // Если не аутентифицирован, перенаправляем на страницу входа
    router.push("/");
    return null; // Не рендерим ничего пока не произойдет перенаправление
  }

  if (userRole !== "admin") {
    // Если пользователь не админ, перенаправляем на профиль
    router.push("/");
    return null; // Не рендерим ничего пока не произойдет перенаправление
  }

  return children; // Рендерим детей если все проверки пройдены
};

export default ProtectedRoute;
