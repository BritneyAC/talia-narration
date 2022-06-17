import { useEffect, useState } from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Main.module.css';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Samples from '@/components/Samples';
import Reviews from '@/components/Reviews';
import Links from '@/components/Links';
import talia from "@/images/talia.jpg"

const Home: NextPage = () => {
  const [navIsShown, setNavIsShown] = useState(false)
  const [location, setLocation] = useState("/")
  const [expanded, setExpanded] = useState(true)
  const toggleMenu = () => {
    setNavIsShown((prevShown: boolean) => !prevShown)
  }
  const switchPage = (newLocation: string) => {
    setLocation(newLocation)
  }

  useEffect(()=>{
    if(location === "/"){
      setExpanded(true)
    } else{
      setExpanded(false)
    }
  }, [location])

  return (
    <div className={styles.app}>
      <Head>
        <title>Talia Narration</title>
        <meta name="description" content="Portfolio site for Talia Carver's narration work" />
      </Head>
      <div className={expanded ? styles.picWrapperExpanded : styles.picWrapper}>
        <Image className={styles.picOfTalia} height={expanded ? 320 : 80} width={expanded ? 240 : 60} sizes={expanded ? "75vw" : "50vw"} layout="responsive" src={talia} alt="Talia"/>
      </div>
      <header className={navIsShown ? styles.headerExpanded : styles.header}>
        <Navbar navIsShown={navIsShown} toggleMenu={toggleMenu} switchPage={switchPage}/>
      </header>
      <main className={styles.main}>
        {location === "/" && <About/>}
        {location === "/samples" && <Samples/>}
        {location === "/reviews" && <Reviews/>}
        {location === "/links" && <Links/>}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {props: {}}
}

export default Home
