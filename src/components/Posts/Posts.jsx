import React from 'react'
// import styles from "./FilmPage.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
import styles from "./Posts.module.css"
import Post from './Post/Post';

// import ContentOut from './ContentOut';

export default function Posts() {
    return (
      <div className={styles.posts}>
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
        <Post className={styles.post} />
      </div>
    );
  }