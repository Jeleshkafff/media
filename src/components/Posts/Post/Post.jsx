import React from 'react'
import styles from "./Post.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";

export default function Post({className}) {
  const classes = [styles.Post_div, className].join(' ')

  return (
    <div className={classes}>
        <img className={styles.post_photo} src="image.png" alt="img" />
        <div className="text_post">
            <h3 className={styles.head}>Я и <a className={styles.he} href="#">@VladDragon</a></h3>
            <p></p>
        </div>
        <div className="buttompost">
            <img className={styles.line} src="line.svg" alt="" />
        <div className={styles.dos}>
            <img className={styles.do}  src="like.svg" alt="" />
            <img className={styles.do}  src="Comment.svg" alt="" />
            <img className={styles.do}  src="Share.svg" alt="" />
        </div>
        </div>

    </div>   

  )
}