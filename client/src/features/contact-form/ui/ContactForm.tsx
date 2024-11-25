"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./ContactForm.module.scss";

const { TextArea } = Input;

const ContactForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>Остались вопросы</h2>
          <p className={styles.description}>
            Позвоните или напишите нашим менеджерам, они помогут грамотными
            советами по выбору именно той мебели, которая подойдет вашему
            помещению больше всего.
          </p>
          <a href="tel:+74991107109" className={styles.phone}>
            <PhoneOutlined className={styles.phoneIcon} />
            +7 (499) 110-71-09
          </a>
          <div className={styles.schedule}>Ежедневно с 09:00 до 23:00</div>
        </div>

        <div className={styles.formSection}>
          <Form layout="vertical" onFinish={onFinish} className={styles.form}>
            <Form.Item
              name="name"
              rules={[
                { required: true, message: "Пожалуйста, введите ваше имя" },
              ]}
            >
              <Input placeholder="Ваше имя" className={styles.input} />
            </Form.Item>

            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Пожалуйста, введите номер телефона",
                },
              ]}
            >
              <Input
                placeholder="+7 (___) ___-__-__"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item name="time">
              <Input
                placeholder="Удобное время для звонка"
                className={styles.input}
              />
            </Form.Item>

            <Form.Item name="message">
              <TextArea
                placeholder="Сообщение"
                rows={4}
                className={styles.textarea}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.submitButton}
              >
                Оставить заявку
              </Button>
            </Form.Item>

            <div className={styles.agreement}>
              Нажимая на кнопку «Оставить заявку», вы соглашаетесь с условиями{" "}
              <Link href="/privacy" className={styles.link}>
                Обработки персональных данных
              </Link>{" "}
              и{" "}
              <Link href="/terms" className={styles.link}>
                политикой конфиденциальности
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
