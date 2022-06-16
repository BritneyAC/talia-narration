import styles from "@/styles/Samples.module.css"
import Daddy from "@/samples/Daddy.mp3"
import Bunger from "@/samples/bunger.mp3"
import Normies from "@/samples/normies.mp3"
import GhostStories from "@/samples/50_Ghost_Stories.mp3"
import AsFarAsTheISees from "@/samples/As_Far_As_the_I_Sees.mp3"
import Origins from "@/samples/Origins.mp3"
import ParanormalPets from "@/samples/Paranormal_Pets.mp3"
import WitchWater from "@/samples/Witch-Water.mp3"
import { NextPage } from "next"



const Samples: NextPage = () => {
  const arrayOfSamples = [
    Daddy,
    Bunger,
    Normies,
    GhostStories,
    AsFarAsTheISees,
    Origins,
    ParanormalPets,
    WitchWater
  ]

  const samplesElements = arrayOfSamples.map((sample, index) => 
    <div key={index} className={styles.sample}>
      <audio preload="none" controls>
        <source  src={sample} type="audio/mpeg" />
      </audio>
    </div>)

  return(
    <div className={styles.samples}>
      {samplesElements}
    </div>
  )
}

export default Samples