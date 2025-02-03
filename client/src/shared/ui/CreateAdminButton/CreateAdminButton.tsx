"use client";
import React, { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { Input, Modal } from "antd";
import styles from "./CreateAdminButton.module.scss";
import RegisterForm from "@/features/Auth/RegisterForm/RegisterForm";
import useAuthHook from "@/features/Auth/useAuthHook";

const CreateAdminButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleRegister } = useAuthHook();
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleModalExit = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.create_admin} onClick={handleModalOpen}>
        <GrUserAdmin />+ администратор
      </div>
      <Modal
        title="Создать администратора"
        open={isModalOpen}
        onCancel={handleModalExit}
        className={styles.modal}
      >
        <Input type="text" placeholder="Введите ник" />
        <Input type="mail" placeholder="Введите почту" />
        <Input type="password]" placeholder="Введите пароль" />
      </Modal>
    </>
  );
};

export default CreateAdminButton;
