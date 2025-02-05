import React from "react";
import styles from "./AdminAllProducts.module.scss";
import { Card, Checkbox } from "antd";
import Image from "next/image";
const AdminAllProduct = () => {
  return (
    <div className={styles.product}>
      <h2>Все товары</h2>
      <div className={styles.product__all}>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p className={styles.product__info__price}>3 108 105$</p>
            </div>
          </div>
        </div>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p className={styles.product__info__price}>3 108 105$</p>
            </div>
          </div>
        </div>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p className={styles.product__info__price}>3 108 105$</p>
            </div>
          </div>
        </div>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p className={styles.product__info__price}>3 108 105$</p>
            </div>
          </div>
        </div>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p className={styles.product__info__price}>3 108 105$</p>
            </div>
          </div>
        </div>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p>3 108 105$</p>
            </div>
          </div>
        </div>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p className={styles.product__info__price}>3 108 105$</p>
            </div>
          </div>
        </div>
        <div className={styles.product__all__card}>
          <Image src="/bra.jpg" alt="bra" width={100} height={100} />
          <div className={styles.product__info}>
            <Checkbox />
            <div>
              <h3 className={styles.product__info__name}>
                Подвестная каскадная люстра
              </h3>
              <p className={styles.product__info__price}>3 108 105$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAllProduct;
