"use client";
import React from "react";

import OrderStatus from "../../features/user-profile/components/order-status/OrderStatus";
import UserProfileInfo from "../../features/user-profile/components/user-profile/UserProfileInfo";
import styles from "./page.module.scss";
import Auth from "../auth/page";
import { AdminPage } from "../../features/admin-panel/ui/admin-page/AdminPage";
import ProtectedRoute from "../../entities/ProtectedRoute/ProtectedRoute";

const Profile = () => {
  return (
    <ProtectedRoute>
      <div className={styles.profileContainer}>
        <UserProfileInfo />
        <OrderStatus />
      </div>
    </ProtectedRoute>
  );
};

export default Profile;
