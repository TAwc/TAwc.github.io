import React, { useState, useEffect } from 'react';
import styles from './homepage.module.css'
import {Link} from 'react-router-dom'



const Homepage = () =>  {

    return (
      <div>
          <h1 className={styles.h1}>Hello</h1>
          <ul>
            <Link to={process.env.PUBLIC_URL + "/aboutme"}>About Me</Link>
            <Link to={process.env.PUBLIC_URL + "/projects"}>Projects</Link>
          </ul>
      </div>
    );
}

export default Homepage;