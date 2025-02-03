// components/Advantages/Advantages.tsx
import React from "react";
import { Row, Col, Card } from "antd";

import styles from "./Advantages.module.scss";
import { advantages } from "../../model/index";
import AdvantagesCard from "../advantages-card/AdvantagesCard";

const Advantages: React.FC = () => {
  return (
    <div className={styles.container}>
      <Row gutter={[24, 24]}>
        {advantages.map((advantage, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <AdvantagesCard advantage={advantage} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Advantages;
