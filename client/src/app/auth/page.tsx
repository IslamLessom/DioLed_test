"use client";

import React, { useState } from "react";
import { Button, Card, Input } from "antd";
import Link from "next/link";

import styles from "./page.module.scss";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Card className={styles.auth}>
      <h1 className={styles.auth__title}>{isLogin ? "Вход" : "Регистрация"}</h1>
      <div className={styles.auth__container}>
        <Input className={styles.auth__input} placeholder="Введите почту" />
        {!isLogin && (
          <Input className={styles.auth__input} placeholder="Введите имя" />
        )}
        <Input.Password
          className={styles.auth__input}
          placeholder="Введите пароль"
        />
        {!isLogin && (
          <Input.Password
            className={styles.auth__input_password}
            placeholder="Повторите пароль"
          />
        )}
      </div>
      <div className={styles.auth__button_container}>
        <Button
          className={styles.auth__button}
          type="primary"
          style={{ marginTop: "10px" }}
        >
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </Button>
      </div>
      <p className={styles.auth__description} style={{ marginTop: "10px" }}>
        {isLogin ? (
          <>
            Нет аккаунта?{" "}
            <Button type="link" onClick={toggleMode}>
              Зарегистрируйтесь
            </Button>
          </>
        ) : (
          <>
            Уже есть аккаунт?{" "}
            <Button type="link" onClick={toggleMode}>
              <Link href="/profile">Войдите</Link>
            </Button>
          </>
        )}
      </p>
    </Card>
  );
};

export default Auth;
