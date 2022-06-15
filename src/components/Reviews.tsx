import reviewList from "../ReviewList"
import {FaStar} from "react-icons/fa"
import styles from "@/styles/Reviews.module.css"
import { NextPage } from "next"

const Reviews: NextPage = () => {

  const reviewElements = reviewList.map(review => 
  <div className={styles.review} key={review.id}>
    <h3>{review.name}</h3>
    <p>{review.review}</p>
    <h2>{review.rating}</h2>
    <FaStar className={styles.star}/>
  </div>)

  return(
    <div className={styles.reviews}>
      {reviewElements}
    </div>
  )
}

export default Reviews