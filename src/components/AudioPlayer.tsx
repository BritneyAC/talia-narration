import { useState } from "react"
import styles from "@/styles/css/AudioPlayer.module.css"
import { FaPause, FaPlay } from "react-icons/fa";

export default function AudioPlayer(props: {src: string}) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlaying = () => {
    setIsPlaying(prevPlaying => !prevPlaying)
  }

  return (
    <div className={styles.audioPlayer}>
      <audio className={styles.audioPlayer} src={props.src} controls preload="metadata">
        <button onClick={togglePlaying}>
          { isPlaying ? <FaPlay/> : <FaPause/>}
        </button>
        <div></div>
        <div>
          <input type="range" min="0" max="1" step="0.01" value="0" />
        </div>
        <div></div>
      </audio>
    </div>
  );
}