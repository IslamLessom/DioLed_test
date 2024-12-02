import OrderStatus from "@/features/user-profile/components/order-status/OrderStatus";
import UserProfileInfo from "@/features/user-profile/components/user-profile/UserProfileInfo";
import React from "react";

const Profile = () => {
  return (
    <div>
      <UserProfileInfo />
      <OrderStatus />
    </div>
  );
};

export default Profile;
