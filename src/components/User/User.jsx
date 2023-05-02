import React from 'react'
// import styles from "./FilmPage.module.css"
import { BrowserRouter, NavLink } from "react-router-dom";
import Header from '../Header';
import Futer from '../Futer';
import ComponentsUser from './ComponentsUser';
import Posts from './Posts';
// import Post from './Posts/Post';

// import ContentOut from './ContentOut';

export default function User() {
    return (
      <div >
         <Header/>
         <ComponentsUser/>
         <Posts/>
         {/* <Post/> */}
         {/* <ContentOut/> */}
         <Futer/>
      </div>
    )
  }