import { Badge } from "antd";
import Link from "next/link";
import React from "react";
import { CiHeart, CiUser } from "react-icons/ci";
import { IoPodiumOutline } from "react-icons/io5";
import styles from "./MenuFeauteres.module.scss";
import { useRouter } from "next/navigation";
import { useFavoriteCount } from "../../hooks/useFavoriteCount";
import { useAuth } from "../../../features/auth/context/AuthProvider";
import { useComparisonCount } from "../../hooks/useComparisonCount";
const MenuFeauteres = () => {
  const { isAuthenticated } = useAuth();
  const favoriteCount = useFavoriteCount();
  const comparisionCount = useComparisonCount();

  const router = useRouter();

  const handleClick = () => {
    if (isAuthenticated) {
      router.push("/profile"); // Перенаправление на страницу профиля
    } else {
      router.push("/auth"); // Перенаправление на страницу регистрации
    }
  };
  return (
    <>
      <Link href="/favorites">
        <Badge count={favoriteCount}>
          <CiHeart className={styles.icon} />
        </Badge>
      </Link>

      <Link href="/comparison">
        <Badge count={comparisionCount}>
          <IoPodiumOutline className={styles.icon} />
        </Badge>
      </Link>
      <div onClick={handleClick}>
        <CiUser className={styles.icon} />
      </div>
    </>
  );
};

export default MenuFeauteres;
