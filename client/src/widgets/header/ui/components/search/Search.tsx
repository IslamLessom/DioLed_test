import { SearchOutlined } from "@ant-design/icons";
import Search from "antd/es/transfer/search";
import React from "react";
import { useMediaQuery } from "../../../../../shared/hooks/useMediaQuery";
import styles from "./Search.module.scss";
import { CiSearch } from "react-icons/ci";
const SearchComponents = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      {!isMobile ? (
        <Search placeholder="Поиск среди 1000 изделий" />
      ) : (
        <CiSearch className={styles.search__icon} />
      )}
    </div>
  );
};

export default SearchComponents;
