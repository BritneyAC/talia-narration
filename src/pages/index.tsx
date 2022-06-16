import { useState } from "react";
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
  const toggleMenu = () => {
    setNavIsShown((prevShown: boolean) => !prevShown)
  }
  const switchPage = (newLocation: string) => {
    setLocation(newLocation)
  }
  return (
    <div className={styles.app}>
      <Head>
        <title>Talia Narration</title>
        <meta name="description" content="Portfolio site for Talia Carver's narration work" />
      </Head>
      <Image className={location === "/" ? styles.picOfTaliaExpanded : styles.picOfTalia} height={300} width={220} src={talia}/>
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
