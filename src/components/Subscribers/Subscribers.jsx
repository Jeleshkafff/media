import React from "react";
import styles from "./Subscribers.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import Header from "../Header";
import Futer from "../Futer";
import Peoples from "../Peoples";
// import LogIn from "./Content/LogIn";

// import styles from
export default function Subscribers() {
  return (
    <div>
      <Header />
      <h1 className={styles.hed}>Подписки</h1>
      {/* <LogIn className={styles.login} /> */}
      <Peoples />
      <Futer />
    </div>
  );
}
