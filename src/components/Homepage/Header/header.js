import React from 'react';
import styles from './header.module.css'
//import {Link} from 'react-router-dom'
//{ useState, useEffect } 




const Header = () =>  {

    return (
      <span>
          <div className = {styles.main}>
            <div className= {styles.center}>
                <h1 className= {styles.name}>Alexander Waters</h1>
            </div>
          </div>
      </span>
    );
}

export default Header;
