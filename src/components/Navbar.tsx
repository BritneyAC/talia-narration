import { useState } from "react"
import styles from "@/styles/Navbar.module.css";
import { NextPage } from "next";

interface NavbarProps {
  navIsShown: boolean,
  toggleMenu: ()=>void,
  switchPage: (newLocation: string)=>void
}

const Navbar: NextPage<NavbarProps> = (props) => {
  const location = "/"
  const loc = location.slice(1,location.length)
  

  return(
    <nav className={styles.nav}>
      <h1 className={styles.title}>Talia Carver</h1>
      <button className={styles.toggler} aria-controls="nav--menu" aria-expanded={props.navIsShown ? "true" : "false"} onClick={props.toggleMenu}>
        <span className="sr-only">Menu</span>
        </button>

      {props.navIsShown ? <ul className={styles.menu}>
        <li onClick={() => {props.switchPage("/")}}>About Me</li>
        <li onClick={() => {props.switchPage("/samples")}}>Samples</li>
        <li onClick={() => {props.switchPage("/reviews")}}>Reviews</li>
        <li onClick={() => {props.switchPage("/links")}}>Links</li>
      </ul> : <div className={styles.location}><h1>{loc}</h1></div>}
    </nav>
  )
}

export default Navbar