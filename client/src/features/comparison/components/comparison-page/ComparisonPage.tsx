import React from "react";
import styles from "./ComparisonPage.module.scss";
import TitleInPage from "@/shared/ui/title-in-page/TitleInPage";
import Filtered from "../filtered/Filtered";
import ComprasionContainer from "../comprasion-container/ComprasionContainer";

const ComparisonPage = () => {
  return (
    <div className={styles.comparison}>
      <TitleInPage title="Сравнение товаров" />
      <Filtered />
      <ComprasionContainer />
    </div>
  );
};

export default ComparisonPage;
