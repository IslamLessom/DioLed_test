"use client";
import { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import axios from "axios";
import styles from "./CallRequestModal.module.scss";

const phoneRegex = /^[0-9]{10,15}$/;

const CallRequestModal = ({ isMobile }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      if (!phoneRegex.test(values.phone)) {
        message.error("Пожалуйста, введите корректный номер телефона");
        return;
      }

      const response = await axios.post(`http://188.225.77.249:3001/form`, {
        name: values.name,
        phone_number: values.phone,
        preferred_call_time: values.time,
        description: values.message,
      });

      if (response.status === 201) {
        message.success("Заявка успешно отправлена!");
        form.resetFields();
        setIsModalOpen(false);
      } else {
        message.error("Произошла ошибка при отправке заявки.");
      }
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      message.error("Ошибка при отправке заявки.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.phone__button} onClick={showModal}>
        {!isMobile && <p>Заказать звонок</p>}
      </div>

      <Modal
        title="Заказать звонок"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Имя"
            name="name"
            rules={[{ required: true, message: "Введите ваше имя" }]}
          >
            <Input placeholder="Введите имя" />
          </Form.Item>

          <Form.Item
            label="Номер телефона"
            name="phone"
            rules={[{ required: true, message: "Введите ваш номер" }]}
          >
            <Input placeholder="+7 (999) 123-45-67" />
          </Form.Item>

          <Form.Item label="Удобное время для звонка" name="time">
            <Input placeholder="Например: 14:00 - 16:00" />
          </Form.Item>

          <Form.Item label="Комментарий" name="message">
            <Input.TextArea placeholder="Дополнительные пожелания" rows={3} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Отправить заявку
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CallRequestModal;
