import React, { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa"
import styles from "@/styles/css/About.module.css"
import Reviews from "@/ReviewList"
import Links from "@/components/Links"

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
        <audio src={"https://samples.audible.com/bk/acx0/307640/bk_acx0_307640_sample.mp3"} controls className={styles.audio}/>
        <h1>{'Excerpt from "Witch Water" by Edward Lee'}</h1>
      </div>
      <Links/>
    </div>
  )
}

export default About