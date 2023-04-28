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
  <select className={styles.select} name="select">
  
  <option value="value1"selected> 1</option>
  <option value="value2" > 2</option>
  <option value="value3"> 3</option>
  <option value="value3"> 4</option>
</select>
<select className={styles.select2}  name="select2">
 
  <option value="value1"selected> Январь</option>
  <option value="value2" > Февраль</option>
  <option value="value3"> Март</option>
  <option value="value3"> Апрель</option>
</select>
<select className={styles.select3} name="select3">

  <option value="value1"selected> 2000</option>
  <option value="value2" > 2001</option>
  <option value="value3"> 2002</option>
  <option value="value3"> 2003</option>
</select>
<div className={styles.agree}>
    <input className={styles.checkbox} type="checkbox" name="" id="" />
<p className={styles.apteetext}>Я согласен продать душу владельцу этого сайта</p>
</div>

<button className={styles.button}>Регистрация</button>
    </div>  

  )
}