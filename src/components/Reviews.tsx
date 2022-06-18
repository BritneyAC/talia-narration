import reviewList from "../ReviewList"
import {FaStar} from "react-icons/fa"
import styles from "@/styles/Reviews.module.css"
import { NextPage } from "next"

const Reviews: NextPage = () => {

  const reviewElements = reviewList.map(review => 
  <div className={styles.review} key={review.id}>
    <h3>{review.name}</h3>
    <p>{review.review}</p>
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