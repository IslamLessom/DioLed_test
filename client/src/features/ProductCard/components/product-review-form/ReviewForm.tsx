"use client";
import React from "react";
import { Rate, Button, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Input from "antd/lib/input";
import TextArea from "antd/lib/input/TextArea";
import Dragger from "antd/lib/upload/Dragger";

import styles from "./ReviewForm.module.scss";

const ReviewForm = () => {
  const handleSubmit = () => {
    console.log("Отзыв отправлен!");
  };

  return (
    <div className={styles.form}>
      <div className={styles.title}>Оставьте свой отзыв</div>

      <div className={styles.field}>
        <Input placeholder="Ваше имя*" />
      </div>
      <div className={styles.field}>
        <Input placeholder="Ваш e-mail" />
      </div>
      <div className={styles.field}>
        <TextArea placeholder="Текст сообщения*" rows={4} />
      </div>

      <div className={styles.ratings}>
        <div>
          <div>Дизайн:</div>
          <Rate />
        </div>
        <div>
          <div>Удобство:</div>
          <Rate />
        </div>
        <div>
          <div>Качество:</div>
          <Rate />
        </div>
      </div>

      <div className={styles.upload}>
        <Dragger name="files" multiple>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p>Перетащите изображения или видео сюда для добавления</p>
          <p>Или нажмите на кнопку ниже, чтобы прикрепить файл</p>
        </Dragger>
      </div>

      <Button
        type="primary"
        className={styles.submitButton}
        onClick={handleSubmit}
      >
        Отправить
      </Button>
    </div>
  );
};

export default ReviewForm;
