"use client";
import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import Link from "next/link";
import styles from "./ContactForm.module.scss";
import { ContactFormProps } from "../model/type";
import axios from "axios";

const { TextArea } = Input;

const phoneRegex =
  /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const ContactForm: React.FC<ContactFormProps> = ({
  title,
  description,
}: any) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post(`http://188.225.77.249:3001/form`, {
        name: values.name,
        phone_number: values.phone,
        preferred_call_time: values.time,
        description: values.message,
      });
      if (!phoneRegex.test(values.phone)) {
        message.error("Пожалуйста, введите корректный номер телефона");
        return;
      }
      if (response.status === 201) {
        message.success("Заявка успешно отправлена!");
        form.resetFields();
      } else {
        message.error("Произошла ошибка при отправке заявки.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Произошла ошибка при отправке заявки.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSection}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <a href="tel:+74991107109" className={styles.phone}>
            <PhoneOutlined className={styles.phoneIcon} />
            +7 (499) 110-71-09
          </a>
          <div className={styles.schedule}>Ежедневно с 09:00 до 23:00</div>
        </div>

        <div className={styles.formSection}>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className={styles.form}
          >
            {" "}
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
                {
                  validator: (_, value) =>
                    phoneRegex.test(value)
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            "Пожалуйста, введите корректный номер телефона"
                          )
                        ),
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
                loading={loading}
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
