import React from "react";
import styles from "./ReviewCard.module.scss";
import { Rate } from "antd";
import { Card } from "antd";
import Image from "next/image";
import { Review } from "../../model/type";

const ReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <div>
          <h3 className={styles.author}>{review.author}</h3>
          <Rate
            disabled
            defaultValue={review.rating}
            allowHalf
            className={styles.rating}
          />
        </div>
        <span className={styles.date}>{review.date}</span>
      </div>

      <p className={styles.reviewText}>{review.text}</p>

      <div className={styles.productInfo}>
        <Image
          src="/lustra.jpg"
          alt={review.product.name}
          className={styles.productImage}
          width={100}
          height={100}
        />
        <span className={styles.productName}>{review.product.name}</span>
      </div>
    </Card>
  );
};

export default ReviewCard;
