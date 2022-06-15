import { useState } from "react";
import type { NextPage } from 'next';
import styles from '@/styles/Main.module.css';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Samples from '@/components/Samples';
import Reviews from '@/components/Reviews';
import Links from '@/components/Links';
import Head from 'next/head';
import talia from "@/images/talia.jpg"

const Home: NextPage = () => {
  const [navIsShown, setNavIsShown] = useState(false)
  const [location, setLocation] = useState("/")
  const toggleMenu = () => {
    setNavIsShown((prevShown: boolean) => !prevShown)
  }
  return (
    <div className={styles.app}>
      <Head>
        <title>Talia Narration</title>
        <meta name="description" content="Portfolio site for Talia Carver's narration work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img className={location === "/" ? styles.picOfTaliaExpanded : styles.picOfTalia} src={talia.src}/>
      <header className={navIsShown ? styles.headerExpanded : styles.header}>
        <Navbar navIsShown={navIsShown} toggleMenu={toggleMenu}/>
      </header>
      <main className={styles.Main}>
        <About/>
        {/* <Samples/> */}
        <Reviews/>
        <Links/>
      </main>
    </div>
  )
}

export default Home
