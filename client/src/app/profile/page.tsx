import OrderStatus from "@/features/user-profile/components/order-status/OrderStatus";
import UserProfileInfo from "@/features/user-profile/components/user-profile/UserProfileInfo";
import React from "react";
import Auth from "../auth/page";

const Profile = () => {
  return (
    <div>
      <Auth />
      <UserProfileInfo />
      <OrderStatus />
    </div>
  );
};

export default Profile;
