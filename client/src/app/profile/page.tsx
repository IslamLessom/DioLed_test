"use client";
import React from "react";

import OrderStatus from "@/features/UserProfile/components/order-status/OrderStatus";
import UserProfileInfo from "@/features/UserProfile/components/user-profile/UserProfileInfo";
import styles from "./page.module.scss";
import Auth from "../auth/page";
import { AdminPage } from "@/features/AdminPanel/ui/admin-page/AdminPage";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      {/*<p>1 - вход </p>
      <Auth />
      <p>2 - обычный пользователь видит эту страницу</p>
      */}
      <UserProfileInfo />
      <OrderStatus />
      {/*
      <p>3 - админ видит эту страницу</p>
      <AdminPage />
        */}
    </div>
  );
};

export default Profile;
