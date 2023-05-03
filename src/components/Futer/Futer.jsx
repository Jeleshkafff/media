import React from 'react'
import styles from "./Futer.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Futer() {
  return (
    <footer>

        <div className={styles.Futer_div}>
      <div className={styles.innerFooter}>
        
        
        <p className={styles.p}>Короче, тут должны быть социалки, но у меня их нет, так-что подписыватесь на мою телегу https://t.me/jeleshkaffff</p>
      </div>
            
    
    </div>    
    </footer>
  

  )
}