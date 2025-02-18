"use client";
import React, { useState, useCallback } from "react";
import { Button, Card, Form, Input, message } from "antd";
import axios from "axios";
import styles from "./CartForm.module.scss";

type FieldType = {
  username: string;
  firstname: string;
  phone: string;
  address: string;
  comments: string;
};

type CartFormProps = {
  totalSum: number;
  products: any[];
  updateCart: () => void;
};

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CartForm: React.FC<CartFormProps> = ({
  totalSum,
  products,
  updateCart,
}) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  console.log(products);
  const onFinish = useCallback(
    async (values: FieldType) => {
      setLoading(true);
      const order = {
        customerInfo: {
          username: values.username,
          firstname: values.firstname,
          phone: values.phone,
          address: values.address,
        },
        comments: values.comments,
        products: products.map((p) => ({
          id: p.id,
          name: p.product_name,
          price: parseInt(
            (p.base_price || "0").toString().replace(/\s/g, ""),
            10
          ),
          quantity: p.quantity || 1,
        })),
        total_sum: totalSum,
        user_id: 2,
      };

      try {
        const response = await axios.post(
          `http://188.225.77.249:3001/orders`,
          order
        );
        console.log(response);
        message.success("Заказ успешно оформлен!");
        form.resetFields();

        localStorage.setItem("busket", "[]");
        updateCart();
      } catch (error) {
        message.error("Ошибка при оформлении заказа. Попробуйте снова.");
      } finally {
        setLoading(false);
      }
    },
    [form, totalSum, products, updateCart]
  );

  return (
    <Card bordered={false} className={styles.form}>
      <h2 className={styles.form__title}>Заполните поля</h2>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className={styles.form_delivery}
      >
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "Введите имя!" }]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item<FieldType>
          name="firstname"
          rules={[{ required: true, message: "Введите фамилию!" }]}
        >
          <Input placeholder="Введите фамилию" />
        </Form.Item>
        <Form.Item<FieldType>
          name="phone"
          rules={[{ required: true, message: "Введите номер телефона!" }]}
        >
          <Input placeholder="Введите номер телефона" />
        </Form.Item>
        <Form.Item<FieldType>
          name="address"
          rules={[{ required: true, message: "Введите адрес!" }]}
        >
          <Input placeholder="Введите адрес" />
        </Form.Item>
        <Form.Item<FieldType> name="comments">
          <Input.TextArea placeholder="Введите комментарий" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Оформить заказ
        </Button>
      </Form>
      <Card bordered={false} className={styles.form__price}>
        <p className={styles.form__price_title}>Итого: </p>
        <h1 className={styles.form__price_actual}>{totalSum} руб.</h1>
      </Card>
    </Card>
  );
};

export default CartForm;
