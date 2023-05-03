import React from 'react'
import styles from "./LogIOS.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
import Header from '../Header';
import Futer from '../Futer';
import LogIn from './Content/LogIn';

// import styles from
export default function LogIOS() {
  return (
    <div className={styles.test}>
       <Header/>
       <LogIn className={styles.login}/>
       <Futer/>
    </div>
  )
}