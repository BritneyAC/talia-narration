import styles from "@/styles/Samples.module.css"
import GhostStories from "@/samples/50_Ghost_Stories.ogg"
import AsFarAsTheISees from "@/samples/As_Far_As_the_I_Sees.ogg"
import Origins from "@/samples/Origins.ogg"
import ParanormalPets from "@/samples/Paranormal_Pets.ogg"
import WitchWater from "@/samples/Witch-Water.ogg"
import { NextPage } from "next"



const Samples: NextPage = () => {
  const arrayOfSamples = [
    {src: GhostStories, description: '"50 Ghost Stories"'},
    {src: AsFarAsTheISees, description: '"As Far As The I Sees"'},
    {src: Origins, description: '"Origins"'},
    {src: ParanormalPets, description: '"Paranormal Pets"'},
    {src: WitchWater, description:' "Witch Water"'}
  ]

  const samplesElements = arrayOfSamples.map((sample, index) => 
    <div key={index} className={styles.sample}>
      <audio className={styles.audio} preload="none" controls>
        <source  src={sample.src} type="audio/ogg" />
      </audio>
      <h1>{sample.description}</h1>
    </div>)

  return(
    <div className={styles.samples}>
      {samplesElements}
    </div>
  )
}

export default Samples