import React from "react";
import { Carousel } from "antd";
import styles from "./ReviewForm.module.scss";
import { reviews } from "../../api/data";
import ReviewCard from "../review-card/ReviewCard";

const Reviews: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Отзывы DioLed</h1>
      <div className={styles.underline}></div>

      <div className={styles.carouselWrapper}>
        <Carousel
          dots={{ className: styles.dots }}
          infinite
          draggable
          swipeToSlide
          slidesToShow={3}
          autoplay={false}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ]}
        >
          {reviews.map((review) => (
            <div key={review.id} className={styles.slideItem}>
              <ReviewCard review={review} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
