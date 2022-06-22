import reviewList from "../ReviewList"
import {FaStar} from "react-icons/fa"
import styles from "@/styles/Reviews.module.css"
import React from "react"

const Reviews: React.FC = () => {

  const reviewElements = reviewList.map(review => 
  <div className={styles.review} key={review.id}>
    <h1>{review.book}</h1>
    <p>{review.review}</p>
    <h3>-{review.name}</h3>
    <div className={styles.rating}>
      <FaStar className={styles.star}/>
      <h2>{review.rating}</h2>
    </div>
  </div>)

  return(
    <div className={styles.reviews}>
      {reviewElements}
    </div>
  )
}

export default Reviews