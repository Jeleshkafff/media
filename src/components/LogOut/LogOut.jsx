import React from 'react'
// import styles from "./FilmPage.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
import Header from '../Header';
import Futer from '../Futer';
import ContentOut from './ContentOut';

export default function LogOut() {
    return (
      <div >
         <Header/>
         {/* <LogIn/> */}
         <ContentOut/>
         <Futer/>
      </div>
    )
  }