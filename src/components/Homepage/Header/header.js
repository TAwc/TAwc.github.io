import React from 'react';
import styles from './header.module.css'
//import {Link} from 'react-router-dom'
//{ useState, useEffect } 
import ColoredLine from './coloredline'



const Header = () =>  {

    return (
      <span>
          <div className = {styles.main}>
            <div className = {styles.center}>
                <h1 className = {styles.name}>Alexander Waters</h1>
                <ColoredLine color="white"/> {/*update to correct color*/}
                <h2 className = {styles.description}>A Technical Psycho</h2>
            </div>
          </div>
      </span>
    );
}

export default Header;
