import React from "react";
import styles from "./Main.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import Futer from "../Futer";
import Posts from "../Posts";

import Header from "../Header";

// import ContentOut from './ContentOut';

export default function Main() {
  return (
    <div>
      <Header />
      <h1 className={styles.news}>Новости</h1>
      {/* <ComponentsUser /> */}
      <Posts />
      {/* <Post/> */}
      {/* <ContentOut/> */}
      <Futer />
    </div>
  );
}
