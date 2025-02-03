import React from "react";
import styles from "./ProfileSettings.module.scss";
import { IoExitOutline } from "react-icons/io5";
import useAuthHook from "@/features/Auth/useAuthHook";
import { useRouter } from "next/navigation";
import { RiAdminLine } from "react-icons/ri";

const ProfileSettings = () => {
  const { logout, login, userRole } = useAuthHook();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/auth");
  };

  const handleLogin = () => {
    login(userRole);
    router.push("/auth");
  };

  return (
    <div className={styles.profile__container_left__settings}>
      {userRole === "admin" ? <RiAdminLine onClick={handleLogin} /> : <></>}
      <IoExitOutline onClick={handleLogout} />
    </div>
  );
};

export default ProfileSettings;
