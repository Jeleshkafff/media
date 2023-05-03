import React from "react";
import styles from "./People.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";

// import styles from
export default function People() {
  return (
    <div>
      <div className={styles.People_div}>
        <img className={styles.avatar} src="" alt="" />
        <div className={styles.rig}>
          <p className={styles.name}>Ник</p>
          <div className={styles.rr}>
            <p className={styles.statys}>
              статус статус статус статус статус статус статус статус статус
              статус статус
            </p>
            <p className={styles.r}>•••</p>
          </div>
        </div>
      </div>
    </div>
  );
}
