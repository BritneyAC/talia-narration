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
  const [picStyle, setPicStyle] = useState(styles.picWrapperExpanded)
  const [expanded, setExpanded] = useState(true)
  const [smallWidth, setSmallWidth] = useState(false)
  const [width, setWidth] = useState(0)
  const toggleMenu = () => {
    setNavIsShown((prevShown: boolean) => !prevShown)
  }
  const switchPage = (newLocation: string) => {
    setLocation(newLocation)
    if(window.innerWidth <= 820){
      setNavIsShown(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth)
    })
    setWidth(window.innerWidth)
  },[])

  useEffect(() => {
    if(width <= 820){
      setSmallWidth(true)
    } else{
      setSmallWidth(false)
    }
  }, [width])


  useEffect(()=>{
    if(location === "/" && !navIsShown){
      setPicStyle(styles.picWrapperExpanded)
    } else if(location === "/" && navIsShown && !smallWidth){
      setPicStyle(styles.picWrapperExpanded)
    } else if(location === "/" && navIsShown && smallWidth){
      setPicStyle(styles.picWrapperExpandedRaised)
    } else if(location !== "/" && !navIsShown){
      setPicStyle(styles.picWrapper)
    } else if(location !== "/" && navIsShown && !smallWidth){
      setPicStyle(styles.picWrapper)
    } else if(location !== "/" && navIsShown && smallWidth){
      setPicStyle(styles.picWrapperExpandedRaised)
    }
    if(picStyle === styles.picWrapperExpanded || picStyle === styles.picWrapperExpanded){
      setExpanded(true)
    } else{
      setExpanded(false)
    }
  }, [location, navIsShown, smallWidth])

  return (
    <div className={styles.app}>
      <Head>
        <title>Talia Narration</title>
        <meta name="description" content="Portfolio site for Talia Carver's narration work" />
      </Head>
      <div className={picStyle}>
        <Image className={styles.picOfTalia} height={expanded ? 320 : 80} width={expanded ? 240 : 60} sizes={"50vw"} layout="responsive" src={talia} alt="Talia"/>
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

export default Home
