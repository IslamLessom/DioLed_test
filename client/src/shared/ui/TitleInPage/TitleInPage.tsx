import React from "react";
import styles from "./TitleInPage.module.scss";
import { TitleInPageProps } from "./model/type";

const TitleInPage: React.FC<TitleInPageProps> = ({ title }) => {
  return (
    <div className={styles.about__title}>
      <h1>{title}</h1>
      <hr />
    </div>
  );
};

export default TitleInPage;
