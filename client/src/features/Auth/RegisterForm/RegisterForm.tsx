import React, { useState } from "react";
import { Button, Input } from "antd";
import styles from "./RegisterForm.module.scss";
import useAuth from "../useAuth";

const RegisterForm = ({
  onRegister,
}: {
  onRegister: (username: string, email: string, password: string) => void;
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    onRegister(username, email, password);
  };

  return (
    <div className={styles.formContainer}>
      <Input
        placeholder="Введите имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="Введите почту"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button type="primary" onClick={handleSubmit}>
        Зарегистрироваться
      </Button>
    </div>
  );
};

export default RegisterForm;
