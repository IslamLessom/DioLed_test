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
      <UserProfileInfo />
      <OrderStatus />
    </div>
  );
};

export default Profile;
