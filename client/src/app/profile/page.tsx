"use client";

import OrderStatus from "@/features/user-profile/components/order-status/OrderStatus";
import UserProfileInfo from "@/features/user-profile/components/user-profile/UserProfileInfo";
import React, { useState } from "react";
import Auth from "../auth/page";
import { AdminPage } from "@/features/admin-panel/ui/admin-page/AdminPage";

const Profile = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {!visible ? (
        <>
          <Auth />
          <UserProfileInfo />
          <OrderStatus />
        </>
      ) : (
        <>
          <AdminPage />
        </>
      )}
    </div>
  );
};

export default Profile;
