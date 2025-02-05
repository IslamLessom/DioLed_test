"use client";
import React from "react";
import { Button, Card, Form, FormProps, Input } from "antd";
import styles from "./CartForm.module.scss";
type FieldType = {
  username?: string;
  firstname?: string;
  phone?: string;
  remember?: string;
  adress?: string;
  comments?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const CartForm = () => {
  return (
    <Card bordered={false} className={styles.form}>
      <h2 className={styles.form__title}>Заполните поля</h2>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form_delivery}
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Пожалуйста введите имя!" }]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>

        <Form.Item<FieldType>
          name="firstname"
          rules={[{ required: true, message: "Пожалуйста введите фамилию" }]}
        >
          <Input placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item<FieldType>
          name="phone"
          rules={[
            { required: true, message: "Пожалуйста введите номер телефона" },
          ]}
        >
          <Input placeholder="Введите номер телефона" />
        </Form.Item>
        <Form.Item<FieldType>
          name="adress"
          rules={[{ required: true, message: "Пожалуйста введите адрес" }]}
        >
          <Input placeholder="Введите адрес" />
        </Form.Item>
        <Form.Item<FieldType>
          name="comments"
          rules={[
            { required: true, message: "Пожалуйста введите комментарий" },
          ]}
        >
          <Input placeholder="Введите комментарий" />
        </Form.Item>
      </Form>
      <Button type="primary" htmlType="submit">
        Оставить заявку
      </Button>
      <Card bordered={false} className={styles.form__price}>
        <p className={styles.form__price_title}>Итого: </p>
        <h1 className={styles.form__price_actual}>80 000 руб.</h1>
      </Card>
    </Card>
  );
};

export default CartForm;
