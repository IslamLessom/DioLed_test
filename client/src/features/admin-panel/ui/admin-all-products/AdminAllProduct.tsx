import React from "react";
import styles from "./AdminAllProducts.module.scss";
import { Card, Checkbox } from "antd";
import Image from "next/image";
const AdminAllProduct = () => {
  return (
    <div className={styles.product}>
      <h2>Все товары</h2>
      <div className={styles.product__all}>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
        <Card>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <p>Подвестная каскадная люстра</p>
              <p>3 108 105$</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminAllProduct;
