import React from "react"
import styles from "@/styles/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

interface NavbarProps {
  navIsShown: boolean,
  toggleMenu: ()=>void,
  switchPage: (newLocation: string)=>void
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const location = "/"
  const loc = location.slice(1,location.length)
  

  return(
    <nav className={styles.nav}>
      <h1 className={styles.title}>Talia Carver</h1>
      <div className={styles.toggler} aria-controls="nav--menu" aria-expanded={props.navIsShown ? "true" : "false"} onClick={props.toggleMenu}>
        {props.navIsShown ? <GrClose>
          <span className="sr-only">Menu</span>
        </GrClose> :
        <GiHamburgerMenu>
          <span className="sr-only">Menu</span>
        </GiHamburgerMenu>}
      </div>
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