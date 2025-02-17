"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useAuthHook from "../../features/auth/useAuthHook";

const ProtectedRoute = ({ children = null }: any) => {
  const { isAuthenticated, userRole } = useAuthHook();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth");
    }

    if (userRole !== "admin") {
      if (!isAuthenticated) {
        router.push("/auth");
      } else {
        router.push("/profile");
      }
    }
  }, []);

  return children;
};

export default ProtectedRoute;
