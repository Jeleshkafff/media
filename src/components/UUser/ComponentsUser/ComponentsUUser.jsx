import React from "react";
import styles from "./ComponentsUser.module.css";
import { BrowserRouter, NavLink } from "react-router-dom";

export default function ComponentsUUser() {
  return (
    <div className={styles.ComponentsUser_div}>
      <div className={styles.right}>
        <img className={styles.User} src="av.svg" alt="User" />
      </div>
      <div className={styles.leftq}>
        <p className={styles.name}>Jeleshkafff</p>
        <p className={styles.ststys}>
          Официальный аккаунт владельца соцсети "пока что без названия"
        </p>
        <div className={styles.infos}>
          <p className={styles.info}>2 Публикаций</p>
          <NavLink
            to={"/subscribers"}
            id={styles.navLink}
            className={styles.chapterLink}
          >
            <p className={styles.info}>12,3 м Подписчики</p>
          </NavLink>
          <NavLink
            to={"/subscriptions"}
            id={styles.navLink}
            className={styles.chapterLink}
          >
            <p className={styles.info}>5 Подписки </p>
          </NavLink>
          <div className={styles.buttons}>
            <button className={styles.sub}>
              <img className={styles.imgmess} src="plus.svg" alt="meesage" />{" "}
              Подписаться
            </button>
            <NavLink
              to={"/message"}
              id={styles.navLink}
              className={styles.chapterLink}
            >
              <button className={styles.message}>
              {" "}
              <img
                className={styles.imgmess}
                src="mess.svg"
                alt="meesage"
              />{" "}
              Cообщение
            </button>{/* <p className={styles.info}>12,3 м Подписчики</p> */}
            </NavLink>
            
          </div>
        </div>
      </div>
    </div>
  );
}
