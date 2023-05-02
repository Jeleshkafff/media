import React from 'react'
import styles from "./ContentOut.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";

export default function ContentOut() {
  return (
    <div className={styles.ContentOut_div}>
  <div>
    <p  className={styles.t}>E-mail</p>
    <input className={styles.inp} type="email" name="" id="" />
  </div>
  <div>
    <p className={styles.t}>Логин</p>
  <input className={styles.inp} type="text" />
  </div>
  <div>
    <p className={styles.t}>Пароль</p>
  <input className={styles.inp} type="password" name="" id="" />
  </div>
  <p className={styles.t}>Дата рождения</p>
  
  <input className={styles.inp} type="date" name="" id="" />
<div className={styles.agree}>
    <input className={styles.checkbox} type="checkbox" name="" id="" />
<p className={styles.apteetext}>Я согласен продать душу владельцу этого сайта</p>
</div>

<button className={styles.button}>Регистрация</button>
    </div>  

  )
}