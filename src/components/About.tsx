import React, { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import styles from "@/styles/css/About.module.css"
import Reviews from "@/ReviewList"
import sample from "@/samples/Witch-Water.ogg"

const About: React.FC = () => {
  const [review, setReview] = useState(Reviews[0])
  
  useEffect(()=>{
    setReview(Reviews[Math.floor(Math.random() * Reviews.length)])
  },[])

  return(
    <div className={styles.about}>
      <p className={styles.text}>
        Passionate Narrator with a wide vocal range and 
        effortful talent. With a wide variety of books already 
        under my belt, and even recently a part in a local 
        theater production, I am always looking for more 
        opportunities to hone my craft and make something 
        out of it. 
        I hope to help as many people find a voice to their 
        words as possible. 
      </p>
      <div className={styles.sample}>
        <audio className={styles.audio} controls>
          <source  src={sample} type="audio/ogg" />
        </audio>
        <h1>{'Excerpt from "Witch Water" by Edward Lee'}</h1>
      </div>

      <div className={styles.review}>
        <h1>{review.book}</h1>
        <p>{review.review}</p>
        <h2>-{review.name}</h2>
        <div className={styles.rating}>
          <FaStar className={styles.star}/>
          <h3>{review.rating}</h3>
        </div>
      </div>
    </div>
  )
}

export default About