import { NextPage } from "next"
import { FaStar } from "react-icons/fa"
import styles from "@/styles/About.module.css"
import Reviews from "@/ReviewList"
import sample from "@/samples/Origins.mp3"

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
      <div className={styles.sample}>
        <audio className={styles.audio} preload="none" controls>
          <source  src={sample} type="audio/mpeg" />
        </audio>
        <h1>Exerpt from "Origins" by Eve Evans</h1>
      </div>

      <div className={styles.review}>
        <h4>{review.name}</h4>
        <p>{review.review}</p>
        <div className={styles.rating}>
          <FaStar className={styles.star}/>
          <h3>{review.rating}</h3>
        </div>
      </div>
    </section>
  )
}

export default About