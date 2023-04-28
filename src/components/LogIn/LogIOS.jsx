import React from 'react'
// import styles from "./FilmPage.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
import Header from '../Header';
import Futer from '../Futer';
import LogIn from './Content/LogIn';
export default function LogIOS() {
  return (
    <div >
       <Header/>
       <LogIn/>
       <Futer/>
    </div>
  )
}