"use client";

import React, { useEffect } from "react";
import LoginForm from "../../features/auth/login-form/LoginForm";
import RegisterForm from "../../features/auth/register-form/RegisterForm";
import useAuthHook from "../../features/auth/useAuthHook"; // Убедитесь, что вы импортируете правильный хук
import { Button, Card } from "antd";
import styles from "./page.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Импортируем useRouter

const AuthPage = () => {
  const {
    isLoginMode,
    toggleMode,
    handleLogin,
    handleRegister,
    logout,
    isAuthenticated,
    userRole,
  } = useAuthHook();

  const router = useRouter(); // Инициализируем router

  useEffect(() => {
    // Если пользователь уже аутентифицирован, перенаправляем его на профиль или админ-панель
    if (isAuthenticated) {
      router.push(
        isAuthenticated && userRole === "admin" ? "/admin" : "/profile"
      );
    }
  }, [isAuthenticated, router]);

  return (
    <div className={styles.authContainer}>
      <Card className={styles.auth}>
        <h1 className={styles.auth__title}>Личный кабинет</h1>
        {isLoginMode ? (
          <>
            <LoginForm onLogin={handleLogin} />
            <p
              className={styles.auth__description}
              style={{ marginTop: "10px" }}
            >
              Нет аккаунта?{" "}
              <Button type="link" onClick={toggleMode}>
                Зарегистрируйтесь
              </Button>
            </p>
          </>
        ) : (
          <>
            <RegisterForm onRegister={handleRegister} />
            <p
              className={styles.auth__description}
              style={{ marginTop: "10px" }}
            >
              Уже есть аккаунт?{" "}
              <Button type="link" onClick={toggleMode}>
                Войдите
              </Button>
            </p>
          </>
        )}
      </Card>
    </div>
  );
};

export default AuthPage;
