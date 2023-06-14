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
        <div>

      <input className={styles.searchmess} type="text" placeholder="Поиск по сообщениям" />
        </div>
        <div className={styles.prokrutka}>
          {/* {" "} */}
          <ul>
            <li>
              <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
            </li>
            <div className={styles.palk}></div>
            <li className={styles.li}>
              <div className={styles.bb}>
                <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
              </div>
                                       
            </li>
            <div className={styles.palk}></div>
                        <li>
                                       <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
            </li>
            <div className={styles.palk}></div>
            <li>
                                                    <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
            </li>
            <div className={styles.palk}></div>
                        <li>
                                                   <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
            </li>
            <div className={styles.palk}></div>
            <li>
                                                    <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
            </li>
            <div className={styles.palk}></div>
                        <li>
                                                     <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
            </li>
            <div className={styles.palk}></div>
            <li>
                                                     <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
              
            </li>
            <div className={styles.palk}></div>
                        <li>
                                                     <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
              </li>
              <div className={styles.palk}></div>
            <li>
                                                     <img className={styles.viol} src="viol.jpg" alt="" /> 
              <div className={styles.text}>
              <h2 className={styles.Name}>dss</h2>
              <div className={styles.lastmess}>пока</div>  
              </div>
              </li>

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
