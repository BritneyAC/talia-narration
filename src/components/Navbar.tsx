import React from "react"
import styles from "@/styles/css/Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

interface NavbarProps {
  navIsShown: boolean,
  toggleMenu: ()=>void,
  switchPage: (newLocation: string)=>void,
  location: string
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const location = props.location.split("").splice(1, props.location.length - 1).join("");
  

  return(
    <nav className={styles.nav} data-menu={!props.navIsShown ? "closed" : "open"}>
      <div className={styles.titles}>
        <h1 className={styles.title}>Talia Carver</h1>
        <h6 className={styles.location}>{!!location ? location : "about"}</h6>
      </div>
      <div className={styles.toggler} aria-controls="nav--menu" aria-expanded={props.navIsShown ? "true" : "false"} onClick={props.toggleMenu}>
        {props.navIsShown ? <GrClose>
          <span className="sr-only">Menu</span>
        </GrClose> :
        <GiHamburgerMenu>
          <span className="sr-only">Menu</span>
        </GiHamburgerMenu>}
      </div>
      {props.navIsShown && <ul className={styles.menu}>
        <li onClick={() => {props.switchPage("/")}}>About Me</li>
        <li onClick={() => {props.switchPage("/samples")}}>Samples</li>
        <li onClick={() => {props.switchPage("/reviews")}}>Reviews</li>
        <li onClick={() => {props.switchPage("/links")}}>Links</li>
      </ul>}
    </nav>
  )
}

export default Navbar