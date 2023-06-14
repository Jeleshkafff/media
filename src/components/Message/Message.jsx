import React from "react";
import styles from "./Message.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import Futer from "../Futer";
import Posts from "../Posts";

import Header from "../Header";

// import ContentOut from './ContentOut';

export default function Message() {
  return (
    <div className={styles.mesages}>
      <Header />
      {/* <h1 className={styles.news}>Новости</h1> */}
      <div className={styles.peoples}>
        <div className={styles.prokrutka}>
          {/* {" "} */}
          <ul>
            <li>
              {" "}
              <img src="" alt="" /> <h2 className={styles.Name}>dss</h2>
            </li>
            <li>
              {" "}
              <img src="" alt="" /> <h2 className={styles.Name}>dss</h2>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      {/* <ComponentsUser /> */}
      {/* <Posts /> */}
      {/* <Post/> */}
      {/* <ContentOut/> */}
      {/* <Futer /> */}
    </div>
  );
}
