"use client";

import React from "react";
import LoginForm from "../../features/Auth/LoginForm/LoginForm";
import RegisterForm from "../../features/Auth/RegisterForm/RegisterForm";
import useAuth from "../../features/Auth/useAuth";
import { Button, Card } from "antd";
import styles from "./page.module.scss";
import Image from "next/image";

const AuthPage = () => {
  const { isLoginMode, toggleMode, handleLogin, handleRegister } = useAuth();

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
      <div className={styles.div}>
        <Image
          className={styles.imagebody}
          src={"/auth.png"}
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default AuthPage;
