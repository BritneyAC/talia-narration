import { useState } from "react"
import styles from "@/styles/Navbar.module.css";
import { NextPage } from "next";

interface NavbarProps {
  navIsShown: boolean,
  toggleMenu: ()=>void
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
        <li>About Me</li>
        <li>Samples</li>
        <li>Reviews</li>
        <li>Links</li>
      </ul> : <div className={styles.location}><h1>{loc}</h1></div>}
    </nav>
  )
}

export default Navbar