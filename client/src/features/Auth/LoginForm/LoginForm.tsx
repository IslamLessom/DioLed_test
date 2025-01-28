import React, { useState } from "react";
import { Button, Input } from "antd";
import styles from "./LoginForm.module.scss";

const LoginForm = ({ onLogin }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onLogin(username, password);
  };

  return (
    <div className={styles.formContainer}>
      <Input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Введите имя пользователя"
      />
      <Input.Password
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Введите пароль"
      />
      <Button onClick={handleSubmit} type="primary">
        Войти
      </Button>
    </div>
  );
};

export default LoginForm;
