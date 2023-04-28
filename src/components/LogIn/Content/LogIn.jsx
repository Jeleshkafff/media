import React from 'react'
import styles from "./LogIn.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
import { Router, Routes,Route } from 'react-router-dom';
import Header from '../../Header';
export default function LogIn() {
    return (
        <div>
            
        {/* <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Header/>}/>

      
    </Routes>
</BrowserRouter> */}
      <div className={styles.LogInDiv}>
        
        <div className={styles.old}>
          <div className={styles.log}>
        <h2>Логин</h2>
        <input type="text" />
      </div>
      <div className={styles.password}>
        <h2>Пароль</h2>
        <input type="password" name="" id="" />
      </div>
      <NavLink to={"/forgot"} id={styles.navLink} className={styles.chapterLink}>
        <h4>Забыли пароль?</h4>
      </NavLink>
      
   
      <div className={styles.test}>
        <button className={styles.button}>Вход</button>
        <NavLink to={"/Reg"} id={styles.navLink} className={styles.chapterLink}>
      <h4 className={styles.tt}>Регистрация</h4> 
        </NavLink>
      </div>
         
        </div>
        <div className={styles.new}>
        <img src="Cat.png" alt="" />
        <h2>Войти с помощью QR-кота</h2>
        </div>
      </div>  
  </div>
    )
  }