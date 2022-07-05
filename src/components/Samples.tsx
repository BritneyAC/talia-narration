import styles from "@/styles/css/Samples.module.css"
import { NextPage } from "next"
import arrayOfSamples from "@/SampleList"
import React from "react"
import AudioPlayer from "@/components/AudioPlayer"


const Samples: React.FC = () => {
  

  const samplesElements = arrayOfSamples.map((sample, index) => 
    <div key={index} className={styles.sample}>
      <AudioPlayer src={sample.src}/>
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