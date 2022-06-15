import Reviews from "@/ReviewList"
import styles from "@/styles/About.module.css"
import { NextPage } from "next"

const About: NextPage = () => {
  const review = Reviews[0]
  return(
    <section className={styles.about}>
      <p className={styles.text}>
        Passionate Narrorator with a wide vocal range and 
        effortful talent. With a wide variety of books already 
        under my belt, and even recently a part in a local 
        theater production, I am always looking for more 
        opportunities to hone my craft and make something 
        out of it. 
        I hope to help as many people find a voice to their 
        words as possible. 
      </p>
      <div className={styles.review}>
        <h4>{review.name}</h4>
        <p>{review.review}</p>
        <h3>{review.rating}</h3>
        <img src="" alt="Rating star" />
      </div>
    </section>
  )
}

export default About