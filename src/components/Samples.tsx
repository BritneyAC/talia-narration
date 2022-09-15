import styles from "@/styles/css/Samples.module.css"
import arrayOfSamples from "@/SampleList"
import React from "react"


const Samples: React.FC = () => {
  

  const samplesElements = arrayOfSamples.map((sample, index) => 
    <div key={index} className={styles.sample}>
      <img src={sample.cover} alt={sample.name} className={styles.cover}/>
      <div className={styles.right}>
        <audio src={sample.src} controls className={styles.audio}/>
        <div className={styles.info}>
          <h1><a href={sample.link}>{sample.name}</a></h1>
          <h3>By - {sample.author}</h3>
          <p>{sample.genre}</p>
          <p>{sample.voiceDesc}</p>
        </div>
      </div>
    </div>)

  return(
    <div className={styles.samples}>
      {samplesElements}
    </div>
  )
}

export default Samples