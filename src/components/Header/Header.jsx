import React from 'react'
import styles from "./Header.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header_div}>
    <NavLink to={"/"} id={styles.navLink} className={styles.chapterLink}>
        <div className={styles.logo}>
        <img src="Logo.svg" alt="Logo" />
    </div>        
    </NavLink>
    
    <input className={styles.search} type="text" />
    <NavLink to={"/user"} id={styles.navLink} className={styles.chapterLink}>
        <div className={styles.user}
    >
        <img className={styles.user} src="User.png" alt="User" />
    </div>
       
    </NavLink>
    </div>  

  )
}