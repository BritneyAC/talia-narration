import styles from "@/styles/Samples.module.css"
import { NextPage } from "next"
import arrayOfSamples from "@/SampleList"
import React from "react"


const Samples: React.FC = () => {
  

  const samplesElements = arrayOfSamples.map((sample, index) => 
    <div key={index} className={styles.sample}>
      <audio className={styles.audio} controls>
        <source  src={sample.src} type="audio/ogg" />
      </audio>
      <h1>{sample.name}</h1>
      <h3>By - {sample.author}</h3>
      <p>{sample.genre}</p>
      <p>{sample.voiceDesc}</p>
      <p>{sample.contentDesc}</p>
    </div>)

  return(
    <div className={styles.samples}>
      {samplesElements}
    </div>
  )
}

export default Samples