import { useEffect, useState } from "react";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/future/image';
import dynamic from "next/dynamic";

import styles from '@/styles/css/Main.module.css';

import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Links from '@/components/Links';

const Samples = dynamic(() => import('@/components/Samples'));
const Reviews  = dynamic(() => import('@/components/Reviews'));

const Home: NextPage = () => {
  const [navIsShown, setNavIsShown] = useState(false)
  const [location, setLocation] = useState("/")
  const [picStyle, setPicStyle] = useState(styles.picWrapperExpanded)
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
    if(window.innerWidth > 820){
      setNavIsShown(true)
    }
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
  }, [location, navIsShown, smallWidth])

  return (
    <div className={styles.app}>
      <Head>
        <title>Talia Narration</title>
        <meta name="description" content="Portfolio site for Talia Carver's narration work" />
        <link rel="icon" href="tc.ico"/>
      </Head>
      <div className={picStyle}>
        <Image className={styles.picOfTalia} height={1040} width={780} sizes={"40vw"} priority src="/images/talia-min.jpg" alt="Talia"/>
      </div>
      <header className={navIsShown ? styles.headerExpanded : styles.header}>
        <Navbar navIsShown={navIsShown} toggleMenu={toggleMenu} switchPage={switchPage} location={location}/>
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
